# Product Hunt Clone

This is a simplified clone of the Product Hunt website built using React. It showcases a list of products with voting functionality, allowing users to upvote their favorite products. The project consists of two main components: `ProductList` and `Product`. The project was developed using `React class components` and `semantic-ui` for styling.

## Table of Contents

- [Product Hunt Clone](#product-hunt-clone)
  - [Table of Contents](#table-of-contents)
  - [ProductList Component](#productlist-component)
    - [State](#state)
    - [Methods](#methods)
    - [Render](#render)
  - [Product Component](#product-component)
    - [Methods](#methods-1)
    - [Render](#render-1)
  - [Getting Started](#getting-started)
  - [Demo](#demo)

## ProductList Component

The `ProductList` component is responsible for rendering the list of products and managing their votes. It uses the `Seed.products` array to populate the initial product data.

### State

The state of the `ProductList` component includes a `products` array to hold the product data. This data is initially set to an empty array in the `state`.

### Methods

- `componentDidMount()`: This lifecycle method is used to populate the product data when the component is mounted. It sets the `products` state using the `productsArray` array, which is generated from the `sedd.js` file.

- `handleProductUpVote(productId)`: This method is responsible for updating the vote count of a specific product. It maps over the `products` array, increments the vote count of the selected product, and updates the state with the new product data.

### Render

The `render()` method of the `ProductList` component renders the list of products in descending order of votes. It maps over the sorted product data and renders each `Product` component.

## Product Component

The `Product` component represents an individual product item. It displays the product image, vote count, title, description, and the avatar of the submitter.

### Methods

- `handleUpVote()`: This method triggers the `onVote` callback passed from the parent `ProductList` component when the upvote icon is clicked. It updates the vote count of the product.

### Render

The `render()` method of the `Product` component displays the product information, including the vote icon, vote count, title, description, and submitter avatar.

## Getting Started

To run the Product Hunt Clone app:

1. Ensure you have React and ReactDOM installed in your project.
2. Copy the provided code into your React project files.
3. Import the necessary dependencies and components if needed.
4. Replace `seed.js` file with your own product data if desired.
5. Customize styles and layout as needed.
6. Run your React development server.

That's it! You now have a basic Product Hunt Clone app that allows users to upvote their favorite products.

## Demo

View App Here: https://jproducthuntclone.netlify.app/

Feel free to expand upon this foundation by adding additional features, refining the design, and incorporating more interactivity to make the app your own. Happy coding!
