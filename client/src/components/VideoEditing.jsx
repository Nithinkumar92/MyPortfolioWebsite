import { useState } from 'react';

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
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg'
  },
  {
    title: 'Harsha Verse Video Edit',
    driveId: '1nx18m1ayukhx8q7xSB1o4NL_KAp1yZyk', // Replace with the actual Google Drive ID of your edit
    tools: ['Final Cut Pro', 'DaVinci Resolve'],
    description: 'A professionally re-edited version of a Harsha Verse video with improved pacing, transitions, and cinematic color grading.',
    thumbnail: 'https://yt3.googleusercontent.com/EtMutX48MPym_NZ3MADi7Oy7-OhgesTAbrgdgBz4EphnzMzUT9BSpjgMawFZ-ZH-rI1v_lwTzNk=s900-c-k-c0x00ffffff-no-rj' // Replace with a snapshot/thumbnail of your edit
  },

  {
    title: 'Documentary Style Video',
    file: '/mnt/data/documentry style.mov',
    tools: ['Final Cut Pro'],
    driveId:'1S2EjA8sPiVi2vRiHtFLmw4GmGIvA0Iy0',
    description: 'A documentary-style video with professional pacing and cinematic transitions.',
    thumbnail:'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1714732317/catalog/1771327428946522112/rugtbovsshv1jz5aj3ye.jpg'
  },
 
  {
    title: 'Tech Review Edit - Akhil DS',
    file: '/mnt/data/final2 akhil ds tech.mp4',
    driveId:'1UheuvHbzHE6qzU8hgEvdSkNIox-StLiL',
    tools: ['Final Cut Pro'],
    description: 'A professional tech review edit with sound effects, captions, and dynamic pacing.',
    thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOFil3Mehj8y0qMIq-kZaLnD_7hM6TLifcQ&s'
  },
  
];


export default function VideoEditing() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="video-editing" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-5xl w-full flex flex-col items-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">Video Editing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(video)}
            >
              {video.youtubeId ? (
                <img
                  src={getYoutubeThumbnail(video.youtubeId)}
                  onError={(e) => handleImageError(e, video.youtubeId)}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-100 dark:border-slate-800"
                />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-100 dark:border-slate-800"
                />
              )}
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{video.title}</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2 text-sm">{video.description}</div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {video.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded text-xs font-medium border border-gray-200 dark:border-slate-700">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Modal for video preview */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-black dark:hover:text-white text-2xl" onClick={() => setSelected(null)}>&times;</button>
              <div className="mb-4 w-full h-[60vh] min-h-[340px] rounded-xl overflow-hidden border border-gray-100 dark:border-slate-800">
                <iframe
                  src={`https://drive.google.com/file/d/${selected.driveId}/preview`}
                  allow="autoplay"
                  className="w-full h-full"
                  title={selected.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{selected.title}</div>
              <div className="text-gray-600 dark:text-gray-300 mb-2 text-sm">{selected.description}</div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {selected.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded text-xs font-medium border border-gray-200 dark:border-slate-700">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 