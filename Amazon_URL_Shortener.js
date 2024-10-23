(function() {
    const url = window.location.href;
    const match = url.match(/\/dp\/(\w+)/);
    if (match) {
        const asin = match[1];
        const newUrl = `https://www.amazon.co.jp/dp/${asin}`;
        navigator.clipboard.writeText(newUrl).then(function() {
            alert('Shortened URL copied to clipboard!');
        }, function() {
            alert('Failed to copy shortened URL to clipboard.');
        });
    } else {
        alert('ASIN not found in the current URL.');
    }
})();
