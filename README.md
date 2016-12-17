#Pixel Painter

For this application, you will be creating a pixel painting game!

##Before you begin
Please `fork` and `clone` this repository.

##Set-up your files

Please create the following files:

+ index.html
+ styles.css
+ js/app.js

Create link tags for your CSS stylesheet and javascript file in your html document and ensure all files are connected.

##HTML

###Part I
1. Create a header containing the name of the application using a **header** tag.

2. Create a container for your entire application using a **div** tag and set the id attribute to `entireContainer`.

3. Within the `entireContainer`,
  1. Create a container for your palets using a **div** tag and set the id attribute to `paletContainer`.
  2. Create a container for your canvas using a **div** tag and set the id attribute to `canvasContainer`.

4. Within the `paletteContainer`,
  1. Create 5 containers for colors using **div** tags
  2. Set the class attribute on each color to `palette`
  3. Set the id attribute on each pixel to a color name
    - The first palette would have the id `red`, the second pixel would have the id `purple`, and so on.
  4. Set an onclick method on each pixel to call the function `getBackgroundColor()`.
    - Pass `this.id` within the function.

5. Within the `canvasContainer`,
  1. Create 5 pixels using **div** tags
  2. Set the class attribute on each pixel to `canvas`
  3. Set the id attribute on each pixel to `canvas#`
    - The first pixel would have the id `canvas1`, the second pixel would have the id `canvas2`, and so on.
  4. Set an onclick method on each pixel to call the function `changeColorOnClick()`.
    - Pass `this.id` within the function.

6. Create a container using a **div** tag and set the id attribute to `selectedColorNameContainer`.

7. Within the `selectedColorNameContainer`,
  1. Create a container using a **div** tag and set the id attribute to `selectedColorName`.

####End of Part I
Do not continue until you have finished **Part I** of both the Javascript and CSS portion.

##Javascript

###Part I
1. Create a function called **changeColorOnClick** and set the parameter as `idName`.

2. Within the function **changeColorOnClick**,
  1. Use the DOM method to reference an element by its ID to retrieve the background color of the element with id `selectedColorName` and store this in a variable called `originalElementColor`
  2. Use the same DOM method as above, retrieve the background color of the element with the function parameter `idName` and set its value to `originalElementColor`.

3. Create a function called **getBackgroundColor** and set the parameter as `idName`.

4. Within the function **getBackgroundColor**,
  1. Use the DOM method to reference an element by its ID, pass the parameter `idName` within this method, and store this in a variable called `element`
  2. Store the value of the method `window.getComputedStyle(element,null).getPropertyValue("background-color")` in a variable called `style`.
  3. Use the DOM method to reference an element by its ID to retrieve the background color of the element with id `selectedColorName` and set its value to `style`

####End of Part I
Do not continue until you have finished **Part I** of both the Javascript and CSS portion.

##CSS

###Part I
1. Set the background color of each pixel within the `paletteContainer` to it's respective color.

####End of Part I

##End of Part I
Good job on getting this far!

Extra Features:
- Erase
- Fill
- Templates
- Anything you can think of!
