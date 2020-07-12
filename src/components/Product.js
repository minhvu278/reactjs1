import React, {Component} from 'react';

class Product extends Component{
  onAddToCart = () => {
    alert(this.props.price)
  }
  render() {
    return(
        <div>
          <div className=" col-6">
            <div className="card" >
              <img alt={this.props.name} src={this.props.image} width="100px"/>
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                <p>
                  <a className="btn btn-primary" onClick={ this.onAddToCart}>Mua hang</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Product;
