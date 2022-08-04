import React, {Component} from "react";

class Product extends Component {
    addProduct = () => {
        this.props.onAdd(this.props.product);
    }

    render() {
        
        return (
            <div className="product">
                <img src = {"./img/" + this.props.product.img} onClick={() => this.props.onShowItem(this.props.product)}/>
                <h2>{this.props.product.title}</h2>
                <p>{this.props.product.description}</p>
                <b>{this.props.product.price} P</b>
                <div className="add-to-cart" onClick={this.addProduct} >+</div>
            </div>
        );
    }
}

export default Product;