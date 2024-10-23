(function() {
    var currentUrl = window.location.href;
    if (currentUrl.includes("https://www.amazon.co.jp/s?k=")) {
        window.location.href = currentUrl + "&emi=AN1VRQENFRJN5";
    } else {
        alert("This bookmarklet only works on Amazon search result pages.");
    }
})();
