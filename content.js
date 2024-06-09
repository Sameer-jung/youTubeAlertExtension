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

// Function to hide thumbnails
function hideThumbnails() {
  const thumbnails = document.querySelectorAll('ytd-thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.opacity = 0; // Hide thumbnails
  });
}

// Function to show thumbnails
function showThumbnails() {
  const thumbnails = document.querySelectorAll('ytd-thumbnail');
  thumbnails.forEach(thumbnail => {
    thumbnail.style.opacity = 1; // Show thumbnails
  });
}

let thumbnailsEnabled = false;

// Function to handle toggle button click
function handleToggleThumbnails() {
  thumbnailsEnabled = !thumbnailsEnabled; // Toggle thumbnails state
  if (thumbnailsEnabled) {
    showThumbnails(); // If enabled, show thumbnails
  } else {
    hideThumbnails(); // If disabled, hide thumbnails
  }
}

// Function to add event listener for toggle button
function addToggleThumbnailsListener() {
  const toggleButton = document.getElementById('toggleThumbnails');
  if (toggleButton) {
    toggleButton.addEventListener('click', handleToggleThumbnails);
  } else {
    console.error('Toggle button not found.');
  }
}

// Add event listener for DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  hideThumbnails(); // Hide thumbnails by default
  addToggleThumbnailsListener(); // Add event listener for toggle button
});

// Function to handle hiding thumbnails when mouse enters the page
function handleMouseEnter() {
  if (!thumbnailsEnabled) {
    hideThumbnails();
  }
}

// Add event listener for mouse enter
document.addEventListener('mouseenter', handleMouseEnter);

// Function to handle showing thumbnails when mouse leaves the page
function handleMouseLeave() {
  if (!thumbnailsEnabled) {
    showThumbnails();
  }
}

// Add event listener for mouse leave
document.addEventListener('mouseleave', handleMouseLeave);

// Function to handle mutations in the DOM
function handleDOMMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'subtree') {
      // Perform both actions: adding listeners and filtering videos
      addVideoLinkListeners();
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

// Initial addition of event listeners
addVideoLinkListeners();
