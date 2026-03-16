// background.js — service worker
// Clicking the extension icon injects and toggles the sidebar on the active tab

chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Inject sidebar script (safe to call multiple times — sidebar guards itself)
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["sidebar.js"],
    });
    // Tell the sidebar to toggle visibility
    await chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_SIDEBAR" });
  } catch (e) {
    console.error("[autofill background]", e);
  }
});
