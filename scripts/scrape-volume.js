const fetch = require('node-fetch');
const { parse } = require('node-html-parser');

async function scrapeVerusVolume() {
  try {
    console.log('Fetching data from cryptodashboard.faldt.net...');
    const response = await fetch('https://cryptodashboard.faldt.net/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const html = await response.text();
    const root = parse(html);

    // First try the exact selector
    let volumeElement = root.querySelector('#verus-basket-volume-24h > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volumeElement) {
      console.log('Element not found with exact selector, trying alternative approach...');
      
      // Alternative approach: Find the basket section and look for the value
      const basketSection = root.querySelector('#verus-basket-volume-24h');
      
      if (basketSection) {
        // Look for specific patterns that might contain the volume data
        const basketDivs = basketSection.querySelectorAll('div');
        
        for (let i = 0; i < basketDivs.length; i++) {
          const text = basketDivs[i].text.trim();
          // Look for dollar amounts
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volumeElement = basketDivs[i];
            console.log(`Found potential volume: ${text} at index ${i}`);
            break;
          }
        }
      } else {
        console.log('Basket section not found');
      }
    }

    if (volumeElement) {
      const volume = volumeElement.text.trim();
      console.log('Successfully scraped 24h volume:', volume);
      return volume;
    } else {
      console.log('Volume data not found on the page');
      return null;
    }
  } catch (error) {
    console.error('Error scraping the website:', error);
    return null;
  }
}

// Execute the function and log the result
scrapeVerusVolume().then(volume => {
  if (volume) {
    console.log('Final result:', volume);
  } else {
    console.log('Failed to retrieve volume data');
  }
}); 