const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load env vars
dotenv.config();

const app = express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://myportfoliowebsite-pegf.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// MongoDB model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: NODE_ENV 
  });
});

// Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });
  
  try {
    // Save to database
    await Message.create({ name, email, message });
    console.log('✅ Message saved to database');
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email credentials not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Verify transporter
    await transporter.verify();
    console.log('✅ Email transporter verified');
    
    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Message from Portfolio',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><small>Sent from your portfolio website</small></p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('❌ Contact route error:', err);
    console.error('Error details:', {
      message: err.message,
      code: err.code,
      command: err.command
    });
    res.status(500).json({ 
      error: 'Server error', 
      details: err.message,
      code: err.code 
    });
  }
});

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`Environment: ${NODE_ENV}`);
console.log(`Port: ${PORT}`);
console.log(`Allowed origins:`, allowedOrigins);

mongoose.connect(MONGO_URI)
  .then(() => app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email service: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
    console.log(`🗄️  MongoDB: Connected`);
  }))
  .catch(err => console.error('MongoDB connection error:', err));
