import React, { Component } from 'react';

class ShowFullItem extends Component {
    addItem = () => {
        debugger;
        this.props.onAdd(this.props.item);
    }

    render() {
        return (
            <div className="full-item">
                <div>
                    <img src = {"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price} P</b>
                    <div className="add-to-cart" onClick={this.addItem} >+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem;