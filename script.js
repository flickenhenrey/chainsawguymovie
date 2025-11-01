// =======================
// Chainsaw Man - The Movie: Reze Arc
// =======================

// Replace with actual video source
const movieFile = 'YOUR_VIDEO_URL_HERE';

// --- Player Logic ---
const videoPlayer = document.getElementById('video-player');
const currentEpisodeTitle = document.getElementById('current-episode');

// Load and play the movie
function loadMovie() {
  if (movieFile && movieFile !== 'YOUR_VIDEO_URL_HERE') {
    videoPlayer.src = movieFile;
    videoPlayer.load();
  }
  currentEpisodeTitle.textContent = 'Chainsaw Man – The Movie: Reze Arc';
}

// Initialize on page load
loadMovie();
