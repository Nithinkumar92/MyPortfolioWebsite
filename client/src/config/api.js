// API Configuration
const isDevelopment = import.meta.env.DEV;

export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5001' 
  : 'https://myportfoliobackend-epy0.onrender.com';

export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  // Add other endpoints here as needed
}; 