YouTube Alert Extension
Description
The YouTube Alert Extension is designed to help users stay focused while browsing YouTube. It alerts users to avoid distractions and provides an option to customize alert messages. The extension also includes a feature to toggle the visibility of video thumbnails, helping to minimize visual distractions.

Features
Custom Alert Messages: Set and save your own custom alert message to be displayed when you visit YouTube.
Thumbnail Toggle: Hide or show YouTube video thumbnails to help reduce distractions.
Link Click Alert: Alerts you when you click on video links to remind you to stay focused.
Installation
Clone the repository or download the ZIP file from GitHub.
bash
Copy code
git clone https://github.com/yourusername/YouTubeAlertExtension.git
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top-right corner.
Click on the "Load unpacked" button and select the directory where you cloned or unzipped the extension.
Usage
After installation, click on the extension icon next to the address bar to open the popup.
Enter your custom alert message in the textarea and click "Save Message" to store it.
The custom alert will be displayed whenever you visit YouTube.
The extension will automatically hide video thumbnails by default. Click the toggle button in the popup to show or hide thumbnails as needed.
Files
content.js: Contains the main functionality of the extension, including alert messages and thumbnail toggling.
manifest.json: Defines the extension's configuration and permissions.
popup.html: The HTML for the extension's popup interface.
popup.js: Handles the saving and loading of custom alert messages in the popup.
styles.css: The CSS file for styling the popup interface.
Permissions
activeTab: Allows the extension to access the currently active tab.
storage: Allows the extension to store and retrieve the custom alert message.