import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const getYoutubeThumbnail = (videoId) =>
  `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

const handleImageError = (e, videoId) => {
  e.target.onerror = null; // Prevent infinite loop
  e.target.src = `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};

const videos = [
  {
    title: 'Story of Taj Mahal - Explainer Video',
    driveId: '1XNU1zWO1ibWDzyoriuoVAMAgY1uw9JeH',
    tools: ['DaVinci Resolve', 'Final Cut Pro'],
    description: 'An engaging explainer video narrating the story of the Taj Mahal, enhanced with cinematic visuals, motion graphics, and smooth transitions.',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
    category: 'Documentary',
    duration: '1:17'
  },
  {
    title: 'Harsha Verse Video Edit',
    driveId: '1nx18m1ayukhx8q7xSB1o4NL_KAp1yZyk',
    tools: ['Final Cut Pro', 'DaVinci Resolve'],
    description: 'A professionally re-edited version of a Harsha Verse video with improved pacing, transitions, and cinematic color grading.',
    thumbnail: 'https://i.ytimg.com/vi/Gs287P2fxrE/hqdefault.jpg',
    category: 'Music Video',
    duration: '1:09'
  },
  {
    title: 'Documentary Style Video',
    driveId:'1S2EjA8sPiVi2vRiHtFLmw4GmGIvA0Iy0',
    tools: ['Final Cut Pro'],
    description: 'A documentary-style video with professional pacing and cinematic transitions.',
    thumbnail:'https://www.videoschool.com/wp-content/uploads/2016/04/How-to-Edit-a-Documentary-Phil-Ebiners-Process-1280x720.jpg',
    category: 'Documentary',
    duration: '0:05'
  },
  {
    title: 'Tech Review Edit - Akhil DS',
    driveId:'1UheuvHbzHE6qzU8hgEvdSkNIox-StLiL',
    tools: ['Final Cut Pro'],
    description: 'A professional tech review edit with sound effects, captions, and dynamic pacing.',
    thumbnail:'https://yt3.googleusercontent.com/Anu5jCwBtEaPF8KUdYOpEWXsOY2Svrywotpv_92QyxbH6zbyti-dxu9MjjxrhMF0vvh9DVs2fQ=s900-c-k-c0x00ffffff-no-rj',
    category: 'Tech Review',
    duration: '1:03'
  },
  {
    title: 'Swaroop VITB Edit',
    driveId: '1m4YZ79sFqao826ZBuQ4zDv8jf2BnW9mj',
    tools: ['DaVinci Resolve'],
    description: 'A powerful 1-minute motivational video sample edited for Swaroop via VIT BITS. This short is themed around money, ambition, and success, aiming to inspire viewers with impactful visuals, tight cuts, and an emotionally driven soundtrack. Edited using DaVinci Resolve to maintain cinematic quality and professional pacing.',
    thumbnail: 'https://i.ytimg.com/vi/I-cA9vPVX8o/maxresdefault.jpg',
    category: 'Motivational',
    duration: '0:36'
  }
];

export default function VideoEditing() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="video-editing" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl w-full flex flex-col items-center px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Video Editing Portfolio
        </motion.h2>
        
        {/* Main Carousel */}
        <div className="w-full relative">
          {/* Featured Video */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={videos[currentIndex].thumbnail}
                  alt={videos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <span className="px-2 py-1 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full border border-white/30">
                      {videos[currentIndex].category}
                    </span>
                    <span className="px-2 py-1 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full">
                      {videos[currentIndex].duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                    {videos[currentIndex].title}
                  </h3>
                  
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl">
                    {videos[currentIndex].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => setSelected(videos[currentIndex])}
                      className="px-4 py-2 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch Video
                    </button>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {videos[currentIndex].tools.map(tool => (
                        <span key={tool} className="px-2 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full border border-white/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/30"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextVideo}
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/30"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-2">
            {videos.map((video, index) => (
              <button
                key={video.title}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-10 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex 
                    ? 'ring-2 sm:ring-4 ring-blue-500 scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Enhanced Modal */}
        {selected && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div 
              className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-4xl sm:max-w-5xl max-h-[98vh] sm:max-h-[95vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-6 md:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20"
                onClick={() => setSelected(null)}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Video Player */}
              <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] min-h-[250px] sm:min-h-[300px] relative">
                <iframe
                  src={`https://drive.google.com/file/d/${selected.driveId}/preview`}
                  allow="autoplay"
                  className="w-full h-full rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl"
                  title={selected.title}
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Info */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-10 overflow-y-auto max-h-[58vh] sm:max-h-[45vh]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
                      {selected.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selected.description}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-3">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-6 md:py-3 bg-blue-500 text-white text-xs sm:text-sm md:text-lg font-bold rounded-full">
                      {selected.category}
                    </span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-6 md:py-3 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-lg font-bold rounded-full">
                      {selected.duration}
                    </span>
                  </div>
                </div>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6">
                  {selected.tools.map(tool => (
                    <span 
                      key={tool} 
                      className="px-2 py-1 sm:px-3 sm:py-1 md:px-6 md:py-3 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm md:text-lg font-medium border border-gray-200 dark:border-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 