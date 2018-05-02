# All the Likes!

Create reaction buttons for your website and store how many times they've been clicked! Time to become the most popular person on your web server!

![Reactions](https://github.com/junior-devleague/all-the-likes/blob/master/assets/reactions.png)

## Objective

Use **Local Storage** and **JavaScript Events** to store how many times a user clicks on an image. Change the **innerHTML** of an HTML element to display this information.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of JavaScript and DOM.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
* Set up your project file structure through the command line.
* Create an HTML, CSS, and JS file.
* Link all files correctly.

**In your HTML file, create the following**

1 main div that has 3 sections and a button. In each section, include a ```p``` and ```img``` element as follows:

* A ```div``` with ```class``` of 'container'.
  - ```section``` with ```id``` of 'like'
    - ```p``` with ```id``` of 'like-count'
    - ```img``` with ```width``` of '50px', ```id``` of 'like-image', and path to source

  - ```section``` with ```id``` of 'love'
    - ```p``` with ```id``` of 'love-count'
    - ```img``` with ```width``` of '50px', ```id``` of 'love-image', and path to source

  - ```section``` with ```id``` of 'laugh'
    - ```p``` with ```id``` of 'laugh-count'
    - ```img``` with ```width``` of '50px', ```id``` of 'laugh-image', and path to source

### Part II

To complete Part II, fulfill the following requirements:

**In your JS file, create the following**

Local Storage is a way for us to store data locally without affecting website performance. Local Storage takes in name/value pairs that will be stored with no expiration date. Read up on Local Storage here: https://www.w3schools.com/html/html5_webstorage.asp.

Before you begin, create a function that will run our code as soon as our webpage loads:
Script
```Java
window.onload = function() {


//All code goes in here


}
```

1. Create three variables, ```likeCount```, ```loveCount```, and ```laughCount``` that will use ```localStorage``` to *getItem* 'like', 'love', and 'laugh'.

Example:
```JavaScript
var likeCount = localStorage.getItem('like');
```

2. Create three variables, ```likeImage```, ```loveImage```, and ```laughImage``` that will ```getElementById``` and store each of our image elements.

3. Create three variables, ```likeText```, ```loveText```, and ```laughText``` that will ```getElementById``` and store each of our ```p``` elements. This will display our like counts.  

4. Change the ```innerHTML``` of all of your text variables to the count variables.

5. Create ```Event Listeners``` that will listen for clicks on our images. When the image is clicked:
- ```increment``` the respective count variable
- Use ```localStorage``` *setItem* to target the key we initially set in the beginning and set the value of this key to the count variable we just incremented.

Example:
```JavaScript
localStorage.setItem('like', likeCount);
```

- Change the innerHTML of the respective text variable to our new count number using ```localStorage```. *Hint: We want localStorage to get our item! What methods from localStorage can we use to return the value we want?*

### Stretch Goals
1. Let's say we want to start our like counts from the beginning. How do we reset all of the values? Create a reset button!
2. Add your favorite emoji/reaction face to the page. When users click on this special image, increment the count and display it on your webpage.  
3. Style your elements and make it look like a reaction bar!
