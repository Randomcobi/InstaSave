// InstaSave Pro Popup Script
document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    const statusText = document.getElementById('statusText');
    
    // Check if we're on Instagram
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        
        if (currentTab.url && currentTab.url.includes('instagram.com')) {
            statusElement.className = 'status active';
            statusText.textContent = '✅ Ready to download on Instagram';
            
            // Check if we're on a downloadable page
            const url = currentTab.url;
            if (url.includes('/p/') || url.includes('/reel/') || url.includes('/tv/') || 
                url.includes('/stories/') || url.includes('/reels/')) {
                statusText.textContent = 'Perfect! You can download media from this page';
            } else if (url === 'https://www.instagram.com/' || url.endsWith('instagram.com/')) {
                statusText.textContent = 'On Instagram home - navigate to a post or story to download';
            } else {
                statusText.textContent = '📍 On Instagram - look for the blue Download button';
            }
        } else {
            statusElement.className = 'status inactive';
            statusText.textContent = '❌ Please navigate to Instagram.com to use this extension';
        }
    });
    
    // Add click handler for instructions
    const instructions = document.querySelector('.instructions');
    instructions.addEventListener('click', function() {
        chrome.tabs.create({url: 'https://www.instagram.com/'});
        window.close();
    });
    

    
    // Add version info
    chrome.runtime.getManifest().then(manifest => {
        const versionElement = document.querySelector('.version');
        if (versionElement) {
            versionElement.textContent = `v${manifest.version}`;
        }
    });
    
    // Add click handler for features
    const featureItems = document.querySelectorAll('.feature-list li');
    featureItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const messages = [
                'Navigate to any Instagram post to download photos!',
                'Find reels and videos to save to your device!',
                'Check out stories and highlights for download!',
                'Use multi-select mode for bulk downloads!'
            ];
            
            // Show a brief message
            const originalText = statusText.textContent;
            statusText.textContent = messages[index];
            setTimeout(() => {
                statusText.textContent = originalText;
            }, 2000);
        });
    });
});
