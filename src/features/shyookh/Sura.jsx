// import React, { useState, useRef, useEffect } from 'react';
// import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Sura({ number, suraName, selectedSheikh }) {
//   const [isPlaying, setIsPlaying] = useState(false); // Track play state
//   const [progress, setProgress] = useState(0); // Track audio progress
//   const [duration, setDuration] = useState(0); // Track audio duration
//   const audioRef = useRef(null); // Persistent reference for the Audio instance

//   useEffect(() => {
//     // Attach event listeners when audioRef is initialized
//     if (audioRef.current) {
//       audioRef.current.onloadedmetadata = () => {
//         setDuration(audioRef.current.duration);
//       };

//       audioRef.current.ontimeupdate = () => {
//         setProgress(audioRef.current.currentTime);
//       };

//       audioRef.current.onended = () => {
//         setIsPlaying(false);
//       };
//     }
//   }, [audioRef.current]); // Re-run if audioRef changes

//   const handlePlayAudio = () => {
//     if (!selectedSheikh?.server) {
//       alert('Audio server not available.');
//       return;
//     }

//     if (!audioRef.current) {
//       const n = number.toString().padStart(3, '0');
//       const audioUrl = `${selectedSheikh.server}/${n}.mp3`;
//       console.log('Audio URL:', audioUrl);
//       audioRef.current = new Audio(audioUrl);

//       // Attach listeners immediately to avoid race conditions
//       audioRef.current.onloadedmetadata = () => {
//         setDuration(audioRef.current.duration);
//       };

//       audioRef.current.ontimeupdate = () => {
//         setProgress(audioRef.current.currentTime);
//       };

//       audioRef.current.onended = () => {
//         setIsPlaying(false);
//       };
//     }

//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleSeek = (event) => {
//     if (audioRef.current && duration > 0) {
//       const newTime = (event.target.value / 100) * duration;
//       audioRef.current.currentTime = newTime;
//       setProgress(newTime);
//     }
//   };

//   const formatTime = (seconds) => {
//     if (!seconds) return '0:00';
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="m-4 flex h-60 w-60 flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg">
//       <div className="text-lg font-semibold text-blue-600">{suraName}</div>
//       <div className="flex items-center gap-5">
//         <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-md">
//           {number}
//         </button>
//         <div>
//           <FontAwesomeIcon
//             className={`cursor-pointer text-[2.6rem] ${
//               isPlaying ? 'text-red-500' : 'text-purple-700'
//             }`}
//             icon={isPlaying ? faCirclePause : faCirclePlay}
//             onClick={handlePlayAudio}
//           />
//         </div>
//       </div>
//       <div className="mt-4 w-full">
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={(progress / duration) * 100 || 0} // Calculate percentage
//           onChange={handleSeek} // Seek on change
//           className="w-full cursor-pointer"
//         />
//         <div className="mt-2 flex justify-between text-sm text-gray-500">
//           <span>{formatTime(progress)}</span>
//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sura;

import React, { useState, useRef, useEffect } from 'react';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let currentAudioRef = null; // Shared reference for the currently playing audio
let setCurrentPlaying = null; // Reference to the current playing setter

function Sura({ number, suraName, selectedSheikh }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      audioRef.current.ontimeupdate = () => {
        setProgress(audioRef.current.currentTime);
      };

      audioRef.current.onended = () => {
        setIsPlaying(false);
        if (currentAudioRef === audioRef.current) {
          currentAudioRef = null;
          setCurrentPlaying?.(false);
        }
      };
    }
  }, [audioRef.current]);

  const handlePlayAudio = () => {
    if (!selectedSheikh?.server) {
      alert('Audio server not available.');
      return;
    }

    //! Stop any currently playing audio
    if (currentAudioRef && currentAudioRef !== audioRef.current) {
      currentAudioRef.pause();
      setCurrentPlaying?.(false); // Reset the previous audio's state
    }

    if (!audioRef.current) {
      const n = number.toString().padStart(3, '0');
      const audioUrl = `${selectedSheikh.server}/${n}.mp3`;
      console.log('Audio URL:', audioUrl);
      audioRef.current = new Audio(audioUrl);

      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };

      audioRef.current.ontimeupdate = () => {
        setProgress(audioRef.current.currentTime);
      };

      audioRef.current.onended = () => {
        setIsPlaying(false);
        if (currentAudioRef === audioRef.current) {
          currentAudioRef = null;
          setCurrentPlaying?.(false);
        }
      };
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      if (currentAudioRef !== audioRef.current) {
        currentAudioRef = audioRef.current;
        setCurrentPlaying = setIsPlaying;
      }
    }
  };

  const handleSeek = (event) => {
    if (audioRef.current && duration > 0) {
      const newTime = (event.target.value / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="m-4 flex h-60 w-60 flex-col items-center justify-between rounded-lg bg-white p-6 shadow-lg">
      <div className="text-lg font-semibold text-blue-600">{suraName}</div>
      <div className="flex items-center gap-5">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-md">
          {number}
        </button>
        <div>
          <FontAwesomeIcon
            className={`cursor-pointer text-[2.6rem] ${
              isPlaying ? 'text-red-500' : 'text-purple-700'
            }`}
            icon={isPlaying ? faCirclePause : faCirclePlay}
            onClick={handlePlayAudio}
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={(progress / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full cursor-pointer"
        />
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}

export default Sura;

