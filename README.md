# Frontend Mentor - Space tourism single-page website

This is a solution to the [Space tourism single-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

The original challenge mentioned that it is a multi-page website, but I wanted to try my hands at creating a single-page website.

### Screenshot


![Homepage for Desktop Layout](images/homepage-desktop.PNG?raw=true "Desktop Layout")
![Homepage for Desktop Layout](images/homepage-tablet.PNG?raw=true "Tablet Layout")
![Homepage for Desktop Layout](images/homepage-mobile.PNG?raw=true "Mobile Layout")
![Mobile Layout with Active Navbar](images/homepage-mobile-nav-open.PNG?raw=true "Mobile Layout - Active Navbar")

### Links

- Live Site URL: (https://hidayahmsabah.github.io/space-tourism/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- Learned full page scroll effect using only CSS

```css
#main{
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
}

.page{
    height: 100vh;
    scroll-snap-align: start;
}
```

## Author

- Portfolio Website - (https://hidayahmsabah.netlify.app/)
- Frontend Mentor - [@hidayahmsabah](https://www.frontendmentor.io/profile/hidayahmsabah)
