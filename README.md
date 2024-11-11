# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Arsalan2078/product-preview-card](https://github.com/Arsalan2078/product-preview-card)
- Live Site URL: [https://arsalan2078.github.io/product-preview-card/](https://arsalan2078.github.io/product-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind
- Flexbox
- Mobile-first workflow
- React Vite
- Typescript

### What I learned

Increased familiarity with tailwind and it's tandem with react components.

Used the Pick utility of Typescript for the first time, that creates a new type using keys of an already existing type. Neat utility that I learned.

```js
import { ProductPreviewCardProps } from "../types";

function ProductName({
  productName,
}: Pick<ProductPreviewCardProps, "productName">) {
  return (
    <h2 className="product-name text-preset-display text-gunmetal">
      {productName}
    </h2>
  );
}

export default ProductName;
```

## Author

- Frontend Mentor - [@Arsalan2078](https://www.frontendmentor.io/profile/Arsalan2078)
