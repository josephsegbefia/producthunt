import React from "react";
import Product from "./Product";
import seed from "../seed.js";

let productsArray = seed;

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ products: productsArray });
  }
  handleProductUpVote(productId) {
    const products = this.state.products;
    products.forEach((product) => {
      if (product.id === productId) {
        product.votes = product.votes + 1;
      }
    });
    this.setState({
      products: products
    });
  }
  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = products.map((product) => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

export default ProductList;
