import React, { Component } from 'react'

export default class GlassesItem extends Component {
  render() {
    let {id, url} = this.props.item;
    return (
        <div onClick={() => {this.props.changeGlasses(id)}} className="glasses_item ">
            <img src={url} alt="" />
        </div>
    )
  }
}
