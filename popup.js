document.getElementById('saveMessage').addEventListener('click', () => {
    const message = document.getElementById('customMessage').value;
    chrome.storage.sync.set({ customAlert: message }, () => {
      alert('Custom alert message saved!');
    });
  });
  
  // Load saved message when popup is opened
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('customAlert', (data) => {
      if (data.customAlert) {
        document.getElementById('customMessage').value = data.customAlert;
      }
    });
  });
  