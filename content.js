// Alert when user visits YouTube
alert('Do not get distracted!');

// Function to show custom alert
function showCustomAlert() {
  chrome.storage.sync.get('customAlert', (data) => {
    const customAlert = data.customAlert || 'Stay focused!';
    alert(customAlert);
  });
}

// Function to handle video link click
function handleVideoLinkClick(event) {
  event.preventDefault(); // Prevent default action of clicking the link
  console.log('Video link clicked:', event.target);
  showCustomAlert(); // Show the custom alert message
}


// Function to add click listeners to video links
function addVideoLinkListeners() {
  console.log('Adding video link listeners');
  const videoLinks = document.querySelectorAll('a.yt-simple-endpoint');
  videoLinks.forEach((link) => {
    link.addEventListener('click', handleVideoLinkClick);
  });
}

// Function to handle mutations in the DOM
function handleDOMMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'subtree') {
      addVideoLinkListeners();
    }
  }
}

// Initialize MutationObserver
const observer = new MutationObserver(handleDOMMutations);

// Start observing changes in the DOM
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

// Initial addition of event listeners
addVideoLinkListeners();


// Function to retrieve whitelisted channels from Chrome storage
function getWhitelistedChannels(callback) {
  chrome.storage.sync.get('whitelistedChannels', (data) => {
    const whitelistedChannels = data.whitelistedChannels || [];
    callback(whitelistedChannels);
  });
}

// Function to filter videos based on whitelisted channels
function filterVideosBasedOnWhitelist(whitelistedChannels) {
  console.log('Filtering videos based on whitelist');
  const videoElements = document.querySelectorAll('ytd-grid-video-renderer');
  videoElements.forEach((videoElement) => {
    const channelElement = videoElement.querySelector('ytd-channel-name a');
    if (channelElement) {
      const channel = channelElement.textContent.trim();
      if (!whitelistedChannels.includes(channel)) {
        // Hide the video if its channel is not in the whitelist
        videoElement.style.display = 'none';
      }
    }
  });
}

// Function to handle mutations in the DOM
function handleDOMMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'subtree') {
      getWhitelistedChannels((whitelistedChannels) => {
        filterVideosBasedOnWhitelist(whitelistedChannels);
      });
    }
  }
}

// Initialize MutationObserver
const observer = new MutationObserver(handleDOMMutations);

// Start observing changes in the DOM
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

