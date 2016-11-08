## What is this?

This will applying colorful animation to your text.

![shuffle-colorful-chars in action](https://raw.githubusercontent.com/kozo002/shuffle-colorful-chars/master/demo.gif)

## Usage

```
$ npm install --save shuffle-colorful-chars
```

```html
<span id="sample">Hello world</span>
```

```js
import ShuffleColorfulChars from "shuffle-color-chars";

document.addEventListener("DOMContentLoaded", () => {
  const sampleNode = new ShuffleColorfulChars(document.getElementById("sample"), {
    lang: "ja", // optional
    bold: true // optional
  });
  sampleNode.run(() => {
    console.log("Finish animation callback"); // optional
  });
});
```
