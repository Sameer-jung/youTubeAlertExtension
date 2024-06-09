 <h1>YouTube Alert Extension</h1>
  <h2>Description</h2>
  <p>The YouTube Alert Extension is designed to help users stay focused while browsing YouTube. It alerts users to avoid distractions and provides an option to customize alert messages. The extension also includes a feature to toggle the visibility of video thumbnails, helping to minimize visual distractions.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>Custom Alert Messages:</strong> Set and save your own custom alert message to be displayed when you visit YouTube.</li>
    <li><strong>Thumbnail Toggle:</strong> Hide or show YouTube video thumbnails to help reduce distractions.</li>
    <li><strong>Link Click Alert:</strong> Alerts you when you click on video links to remind you to stay focused.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository or download the ZIP file from GitHub.</li>
    <pre>
<code>git clone https://github.com/Sameer-jung/youTubeAlertExtension.git</code>
    </pre>
    <li>Open Chrome and go to <code>chrome://extensions/</code>.</li>
    <li>Enable "Developer mode" by toggling the switch in the top-right corner.</li>
    <li>Click on the "Load unpacked" button and select the directory where you cloned or unzipped the extension.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>After installation, click on the extension icon next to the address bar to open the popup.</li>
    <li>Enter your custom alert message in the textarea and click "Save Message" to store it.</li>
    <li>The custom alert will be displayed whenever you visit YouTube.</li>
    <li>The extension will automatically hide video thumbnails by default. Click the toggle button in the popup to show or hide thumbnails as needed.</li>
  </ol>

  <h2>Files</h2>
  <ul>
    <li><code>content.js</code>: Contains the main functionality of the extension, including alert messages and thumbnail toggling.</li>
    <li><code>manifest.json</code>: Defines the extension's configuration and permissions.</li>
    <li><code>popup.html</code>: The HTML for the extension's popup interface.</li>
    <li><code>popup.js</code>: Handles the saving and loading of custom alert messages in the popup.</li>
    <li><code>styles.css</code>: The CSS file for styling the popup interface.</li>
  </ul>

  <h2>Permissions</h2>
  <ul>
    <li><code>activeTab</code>: Allows the extension to access the currently active tab.</li>
    <li><code>storage</code>: Allows the extension to store and retrieve the custom alert message.</li>
  </ul>