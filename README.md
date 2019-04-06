# gScaled

gScaled is a JavaScript jQuery plugins that allows you to autoresize objects based in Object Width and format. Feel free to test it with any format you want, for eg.: **16:9**, **4:3**, **21:9**, **18.5:9** etc.

## Getting started

### 1. Get gScaled

Download (recommended):
* [gScaled.js](https://github.com/c42759/gScaled/raw/master/gScaled.js) - for development (not minified, with comments).
* [gScaled.min.js](https://github.com/c42759/gScaled/raw/master/gScaled.min.js) - for production (minified, no comments).

Or link directly:

```html
<script src="https://github.com/c42759/gScaled/raw/master/gScaled.min.js"></script>
```

### 2. Add the markup

* Define your own class for this type of object.
* Add to each object the proper format using data-format attribute.
* The scale is based on object width

```html
<div class="gScaled" data-format="16:9" style="width: 300px"></div>
<div class="gScaled" data-format="1:1" style="width: 300px"></div>
```

### 3. Fire it up

The bare minimum configuration is demonstrated below. You must always provide the element (or a selector so gScaled can fetch the element for you).

```javascript
$('.gScaled').gScaled();
```
