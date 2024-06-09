// Alert when user visits YouTube
alert('Do not get distracted!');

// Function to show custom alert
function showCustomAlert() {
  chrome.storage.sync.get('customAlert', (data) => {
    if (data.customAlert) {
      alert(data.customAlert);
    } else {
      alert('Stay focused!');
    }
  });
}

// Function to handle video link click
function handleVideoLinkClick(event) {
  console.log('Video link clicked:', event.target);
  showCustomAlert();
}

// Function to add click listeners to video links
function addVideoLinkListeners() {
  console.log('Adding video link listeners');
  const videoLinks = document.querySelectorAll('a#video-title, a.ytd-thumbnail');
  videoLinks.forEach((link) => {
    link.addEventListener('click', handleVideoLinkClick);
  });
}

// Initial addition of event listeners
addVideoLinkListeners();

// Use MutationObserver to detect changes in the DOM
const observer = new MutationObserver(() => {
  console.log('DOM changed, stopping observer');
  observer.disconnect(); // Stop observing changes
});
observer.observe(document.body, { childList: true, subtree: true });
