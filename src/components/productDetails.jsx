import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // this.props.history.push("/products");
    this.props.history.replace("/products"); //Using this implementation we cannot navigate back to product details page if we click browsers back button after clicking save.
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
