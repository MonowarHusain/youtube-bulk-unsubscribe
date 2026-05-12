# YouTube Bulk Unsubscribe Script

A lightweight JavaScript utility to automate the unsubscription process from YouTube channels in bulk. Since YouTube does not provide a native "Unsubscribe All" feature, this script simulates clicks on the Subscriptions Manager page.

## 🚀 How to Use

1. Go to your **[YouTube Subscriptions Manager](https://www.youtube.com/feed/channels)**.
2. Scroll to the bottom of the page to ensure all channels are loaded (YouTube uses lazy loading).
3. Open the **Browser Developer Tools** (`F12` or `Ctrl+Shift+I`).
4. Click on the **Console** tab.
5. Copy the code from `unsubscribe.js` in this repo, paste it into the console, and press **Enter**.

## ⚠️ Important Considerations

*   **Rate Limiting:** YouTube may temporarily throttle your account if you unsubscribe from too many channels (e.g., >100) in a very short period. If the script stops working, wait 24 hours before trying again.
*   **Irreversible:** There is no "undo" button for this action. Use with caution.
*   **Execution Speed:** The script includes a 500ms delay between actions to mimic human behavior and reduce the risk of being flagged as a bot.

## ⚖️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
