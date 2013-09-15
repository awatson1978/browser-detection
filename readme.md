

1.  You really shouldn't use browser-detection.  You should be using feature-detection instead.
http://www.quirksmode.org/js/support.html

2.  But you're going to use browser-detection anyhow, aren't you?  That's cool.  Let's just roll with it, and use the following library.
http://www.quirksmode.org/js/detect.html

3.  Example usage:

````js
// detect browser
BrowserDetect.browser

// currently supports the following browsers
// Chrome
// OmniWeb
// Safari
// Opera
// iCab
// Konqueror
// Firefox
// Camino
// Netscape
// Explorer
// Mozilla
// Netscape


// version
BrowserDetect.version

// operating system
BrowserDetect.OS

// currently supports the following operating systems
// Windows
// Mac
// iPhone/iPod
// Linux


````


Pull requests totally accepted in helping keep this library up-to-date.


