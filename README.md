# leap-simple

Simpler examples of using the [Leap Motion](https://www.leapmotion.com/) device.

This thing is amazing and will make you feel like an old fogey for liking
those rolling clickers, but the mega-examples scare me. This reduces them
to little understandable chunks of code.

Examples use just a hint of [d3js](http://d3js.org/), none of the hard
parts.

Currently

* gesture.html: just recognizing `swipe` and `circle` gestures with the built-in gesture recognizer
* pointer.html: identifying fingers and displaying circles for each
* draw.html: drawing with Canvas and each finger's X & Y position

## Running

You'll obviously need a [Leap Motion](https://www.leapmotion.com/) device
to make this work.

    git clone git@github.com:tmcw/leap-simple.git

Then [boot up a quick development server](https://gist.github.com/tmcw/4989751)
and go to this page.
