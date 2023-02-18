import React, { Component } from 'react'
import './Model.css'

export default class Model extends Component {
render() {
    return (
        <div className='model'>
            <div className="model_img">
                <img src="./glassesImage/model.jpg" alt="" />
            </div>
            <div className="glasses_img">
                <img src={this.props.product?.url} alt="" />
            </div>
            <div className="glasses_info">
                <p>Name: <span>{this.props.product?.name}</span></p>
                <p>Price: <span>{this.props.product?.price}</span> $</p>
                <p>Desc : <span>{this.props.product?.desc}</span></p>
            </div>
        </div>
    )
}
}
