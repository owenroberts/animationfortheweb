##Animation for the Web

This workshop will cover some basic methods for using SVG based animations in the browser.  SVG stands for Scalable Vector Graphics, it's an XML based vector graphic format that can be exported from Adobe Illustrator (or other vector graphics programs) and can interact with CSS and JavaScript like other HTML elements.  Through some examples we'll look at some cool things we can do with SVG on the web, without using any extra libraries, using CSS transitions, inline scriping and JavaScript.

Some cool stuff to look at:  
http://24ways.org/2012/flashless-animation/  
http://blabla.nfb.ca/#/blabla  
http://wildnatureinkazan.ru/  
http://www.drawastickman.com/  

References  
http://w3c.github.io/web-animations/  
https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL  
https://developer.mozilla.org/en-US/docs/Web/SVG  

###Basic example, SVG links with CSS transitions

First to get started we'll look at a quick example for using CSS with SVG.  I'm going to start by drawing some link titles in Illustrator and add some transitions using CSS.  If you don't want to buy Illustrator, try downloading <a href="https://inkscape.org/en/" target="blank">Inkscape</a>.

[Example](http://owenroberts.github.io/animationfortheweb/ex1/index.html)

Once you have drawn your links, save the SVG.  Make sure you keep a copy of the original drawing as a `.ai` file, because we'll be modifying the SVG file, which could make it have errors when it's opened in Illustrator again.  Illustrator will present a bunch of options.  You want to choose SVG 1.1, Type: SVG, Subsetting: None, Image Location: Link, Advanced Options -- CSS Properties: Style Attributes.  Everything else you can leave alone.  <a href="http://creativedroplets.com/export-svg-for-the-web-with-illustrator-cc/" target="blank">Here's an article</a> that explains these attributes in more detail, and goes over some optimization.  There are other tools for SVG optimation worth checking out like <a href="https://github.com/svg/svgo" target="blank">SVGO</a>.

So the great thing about using basic CSS with SVG is that SVG acts sort of like a font when it comes to creating transitions and changing colors, etc.  Unlike PNGs or JPGS, we can change the color of the SVG on each page, change the transition and anything else we can do with CSS.

After adding the optimized SVG markup to my index page, I'm going to add a class and then write some CSS for that class:

`<svg class="blue">`
```
.blue {
	fill:lightblue;
	transition:fill 300ms;
}
.blue:hover {
	fill:blue;
}
```
You can actually do a lot of the stuff we'll be doing with SVG with CSS3 animations.  <a href="http://24ways.org/2012/flashless-animation/" target="blank">Here's a good tutorial to check out for that</a>.

###Embedding SVGs

You've probably noticed that the SVG markup looks really nasty inside your nice HTML page.  It would be a lot nicer to link the SVG file via a tag like `img` or something like that wouldn't it?  That's possible but it presents some problems.  SVGs can be embedded with `img`, `embed`, `object` and `iframe`, but each one has advantages and disadvantages.  `img` won't work with CSS stylesheets.  `object` is the preferred method, because it allows for each PNG or image fallbacks, but has limited support for scripting.  `object` is the best to use for scripting purposes, but also has problems with loading because of the same-origin blocks in modern browsers.  This article explains the <a href="http://thoughtfulweb.co.uk/thoughts/about/the-best-way-to-add-an-svg-image-to-your-website" target="blank">best ways to embed SVG</a>, and this shows <a href="http://www.schepers.cc/svg/blendups/embedding.html" target="blank">all the embed tags</a>.

In the end it's usually easier to put up with all the nasty XML/SVG markup so you can write scripts directly into the page, but in later examples we'll actually be scripting directly into the SVG itself.

If you really want to do this with external files, [check out example 1a](http://owenroberts.github.io/animationfortheweb/ex1-a).

Note that the CSS stylesheet is embedded inside the SVG:

`<?xml-stylesheet type="text/css" href="style.css" ?>`

There are many other drawback and slight annoyances that you will notice in the example, but once it works it can be fun to use.  Oh, also needs to be run on a local server, <a href="http://lifehacker.com/start-a-simple-web-server-from-any-directory-on-your-ma-496425450" target="blank">here's how to do that</a>. 

###Animation types

SVG animation is achieved with <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL" target="blank">SMIL</a>, or Synchronized Multimedia Integration Language.  There are few different ways we can animate SVG graphics using this specialized markup language within an SVG.  Make sure to save copies of your SVGs, because these tags can be rewritten if you make changes in Illustrator.

`animate` or `set` for basic attributes like `x` or `y`  
`animateTransform` for attributes like `scale` or `rotate`  
`animateColor` for color attributes like `fill` and `stroke`  
`animateMotion` to animate along a path

For animations to run they need these basic attributes (there are many others that can be added, for example,  check out the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/calcMode" target="blank">calcMode attribute</a> for easing).

`attributeName` or what to animate
`from` where to start
`to` where to end 
`dur` length of animation

We'll look at examples of each type in [Example 2](http://owenroberts.github.io/animationfortheweb/ex2/index.html).  



###Scripting & Interaction

SVG attributes can be changed through <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script" target="blank">scripts</a>, and animations can be triggered by various inputs.  

We'll look at using ids to trigger the beginning of animations with the `begin` attribute as well as JavaScript based interactions.  
[Example 3](http://owenroberts.github.io/animationfortheweb/ex3/index.html)


###Generation

We can also generate new SVG elements in JavaScript.  As we'll see in the example, this is kind of a pain, which is why there are many great libraries to check out for more advanced interaction and scripting.

[Example 4](http://owenroberts.github.io/animationfortheweb/ex4/index.html)

Libraries:
<a href="http://paperjs.org/" target="blank">Paper</a>
<a href="http://d3js.org/" target="blank">d3</a>
<a href="http://raphaeljs.com/" target="blank">Raphael</a>
<a href="http://snapsvg.io/" target="blank">Snap</a>
<a href="http://fabricjs.com/" target="blank">Fabric</a>
<a href="http://lazylinepainter.info/" target="blank">Lazy Line Painter</a>




####Resources
Some tutorials that I looked at to construct this workshop (that aren't previously mentioned):
https://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_animation
http://www.smashingmagazine.com/2014/11/03/styling-and-animating-svgs-with-css/
http://www.hongkiat.com/blog/scalable-vector-graphics-animation/
http://design.tutsplus.com/tutorials/svg-files-from-illustrator-to-the-web--vector-20899
http://css-tricks.com/guide-svg-animations-smil/
http://commons.oreilly.com/wiki/index.php/SVG_Essentials/Animating_and_Scripting_SVG
http://blog.teamtreehouse.com/svg-path-animation-with-jquery-and-illustrator
