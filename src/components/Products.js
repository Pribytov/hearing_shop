import React, {Component} from "react";
import Product from "./Product";

class Products extends Component { 
    render() {
        return (
            <main>
                {this.props.products.map(e => (
                    <Product key={e.id} product={e} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem}/>
                ))}
            </main>
        );
    }
}

export default Products;