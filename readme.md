**browser-detection** is a Meteorite package for detecting the client browser and operating system.

------------------------
### General Notes

1.  You really shouldn't use browser-detection.  You should be using feature-detection instead.
http://www.quirksmode.org/js/support.html

2.  But you're going to use browser-detection anyhow, aren't you?  That's cool.  Let's just roll with it, and use the following library.
http://www.quirksmode.org/js/detect.html


------------------------
### Installation

First, install the browser-detection package from the command line, like so:

````
mrt add browser-detection
````


Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "browser-detection": {
      "git": "https://github.com/awatson1978/browser-detection.git"
    }
  }
}

````

------------------------
### API

The BrowserDetect object supports three parameters.

````
BrowserDetect.browser
BrowserDetect.version
BrowserDetect.OS
````

------------------------
### Supported Browsers and Operating Systems

````
// currently supports the following browsers
Chrome
OmniWeb
Safari
Opera
iCab
Konqueror
Firefox
Camino
Netscape
Explorer
Mozilla
Netscape


// currently supports the following operating systems
Windows
Mac
iPhone/iPod
Linux
````

------------------------
### Example using Iron Router

````js
// example using iron-router
Router.map(function() {
    this.route('specific_post', {
        path: '/post/:_id',
        data: function(){
            // make sure the collections connect
            return Posts.findOne(this.params._id)
        },
        before: function () {
            // render the unsupported browser page if user isn't using Chrome
            if(BrowserDetect.browser != "Chrome"){
                this.render('unsupportedBrowserPage');
                this.stop();
            }
            if (!Meteor.user()) {
                this.render('loginPage');
                this.stop();
            }
        }
    });
});
````


Pull requests totally accepted in helping keep this library up-to-date.


