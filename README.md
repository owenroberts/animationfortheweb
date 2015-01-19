##Animation for the Web

This workshop will cover some basic methods for using SVG based animations in the browser.  SVG stands for Scalable Vector Graphics, it's an XML based vector graphic format that can be exported from Adobe Illustrator (or other vector graphics programs) and can interact with CSS and JavaScript like other HTML elements.  Through some examples we'll look at some cool things we can do with SVG on the web, without using any extra libraries, using CSS transitions, inline scriping and JavaScript.

###Basic example, SVG links with CSS transitions

First to get started we'll look at a quick example for using CSS with SVG.  I'm going to start by drawing some link titles in Illustrator and add some transitions using CSS.  If you don't want to buy Illustrator, try downloading <a href="https://inkscape.org/en/" target="blank">Inkscape</a>.

[Example](http://theeatingmachine.com/animationfortheweb/ex1-links)

Once you have drawn your links, save the SVG.  Illustrator will present a bunch of options.  You want to choose SVG 1.1, Type: SVG, Subsetting: None, Image Location: Link, Advanced Options -- CSS Properties: Style Attributes.  Everything else you can leave alone.  <a href="http://creativedroplets.com/export-svg-for-the-web-with-illustrator-cc/" target="blank">Here's an article</a> that explains these attributes in more detail, and goes over some optimization.  There are other tools for SVG optimation worth checking out like <a href="https://github.com/svg/svgo" target="blank">SVGO</a>.

So the great thing about using basic CSS with SVG is that SVG acts sort of like a font when it comes to creating transitions and changing colors, etc.  Unlike PNGs or JPGS, we can change the color of the SVG on each page, change the transition and anything else we can do with CSS.

After adding the optimized SVG markup to my index page, I'm going to add a class and then write some CSS for that class:

'''<svg class="blue">'''
'''.blue {
			fill:lightblue;
			transition:fill 300ms;
		}
		.blue:hover {
			fill:blue;
		}'''


You can actually do a lot of the stuff we'll be doing with SVG with CSS3 animations.  <a href="http://24ways.org/2012/flashless-animation/" target="blank">Here's a good tutorial to check out for that</a>.