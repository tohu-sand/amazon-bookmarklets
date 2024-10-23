# Amazon Bookmarklets

This repository contains two bookmarklets designed to improve your experience when using Amazon Japan. These tools are useful for shortening Amazon URLs for easy sharing and filtering search results to show only items sold by Amazon.

## Bookmarklets

### 1. Amazon URL Shortener
A simple bookmarklet that shortens Amazon product URLs by removing unnecessary parameters, making it easier to share clean and concise links.

- **Usage**: Copy the following code and create a new bookmark in your browser. Paste the code into the URL field of the bookmark. Use it on any Amazon product page, and the shortened URL will be copied to your clipboard.

```javascript
javascript:(function() { const url = window.location.href; const match = url.match(/\/dp\/(\w+)/); if (match) { const asin = match[1]; const newUrl = `https://www.amazon.co.jp/dp/${asin}`; navigator.clipboard.writeText(newUrl).then(function() { alert('Shortened URL copied to clipboard!'); }, function() { alert('Failed to copy shortened URL to clipboard.'); }); } else { alert('ASIN not found in the current URL.'); }})();
```

### 2. Amazon EMI Filter
This bookmarklet filters Amazon search results to show only products that are sold and shipped by Amazon.co.jp, helping users find trusted items more efficiently.

- **Usage**: Copy the following code and create a new bookmark in your browser. Paste the code into the URL field of the bookmark. Use it on an Amazon search results page, and the page will reload with the filter applied.

```javascript
javascript:(function() { var currentUrl = window.location.href; if (currentUrl.includes("https://www.amazon.co.jp/s?k=")) { window.location.href = currentUrl + "&emi=AN1VRQENFRJN5"; } else { alert("This bookmarklet only works on Amazon search result pages."); }})();
```

## Installation

1. Copy the JavaScript code from the respective bookmarklet above.
2. Create a new bookmark in your browser.
3. Paste the JavaScript code into the URL field of the bookmark.
4. Save the bookmark and use it on Amazon product or search pages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
