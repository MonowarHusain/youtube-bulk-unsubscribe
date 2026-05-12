/**
 * YouTube Bulk Unsubscribe Script
 * Use this in the browser console on the YouTube Subscriptions Manager page.
 */

(async function unsubscribeAll() {
  // Select all "Unsubscribe" buttons using the aria-label attribute
  const buttons = Array.from(document.querySelectorAll('button[aria-label^="Unsubscribe from"]'));
  
  if (buttons.length === 0) {
    console.log("No subscription buttons found. Make sure you are on the /feed/channels page.");
    return;
  }

  console.log(`Found ${buttons.length} channels. Starting unsubscription process...`);

  for (const button of buttons) {
    try {
      button.click();
      // Wait for the confirmation dialog to appear
      await new Promise(resolve => setTimeout(resolve, 500)); 

      const confirmButton = document.querySelector('yt-confirm-dialog-renderer #confirm-button button');
      if (confirmButton) {
        confirmButton.click();
        console.log(`Unsubscribed from a channel.`);
      }

      // Small delay between actions to prevent YouTube's rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error("Error clicking button:", error);
    }
  }

  console.log("Process complete!");
})();
