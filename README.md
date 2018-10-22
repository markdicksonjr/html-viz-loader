# html-viz-loader

Javascript to more succinctly embed graphviz into html.

## Usage

For any DOM element containing graphviz, apply "data-viz".  An optional "data-format" attribute
is also available if you want to override the format.

`<div data-viz data-format="png-image-element">{GRAPHVIZ HERE}</div>`

A sample index.html file is included with this repo.  

By default, this module will load graphviz directly from Github, unless you specify it as a script
before this module loads (e.g. in an html script tag).