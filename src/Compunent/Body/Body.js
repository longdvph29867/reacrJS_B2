import React, { Component } from 'react'
import GlassesItem from '../GlassesItem/GlassesItem'
import Model from '../Model/Model'
import './Body.css'
export default class Body extends Component {
    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    renderGlassesList = () => {
        return this.dataGlasses.map((item) => {
            return (
                <div key={item.id} className='col-4 col-xl-2 col-lg-3'>
                    <GlassesItem changeGlasses = {this.changeGlasses}  item = {item}/>
                </div>
            )
        })
    }

    state = {
        glassesItem: this.dataGlasses[0]
    }

    changeGlasses = (id) => {
        let index = this.dataGlasses.findIndex((item) => item.id === id)
        this.setState({
            glassesItem: this.dataGlasses[index],
        })
    }
    
    render() {
        return (
      <div className='body'>
        <div>
            <div className="container">
                <div className="model_container row">
                    <div className="model_left">
                        <Model />
                    </div>
                    <div className="model_right">
                        <Model product = {this.state.glassesItem}/>
                    </div>
                </div>
                <div className="glasses_list row bg-white mt-5 pt-3 pb-3">
                    {this.renderGlassesList()}
                </div>
            </div>

        </div>
      </div>
    )
  }
}
