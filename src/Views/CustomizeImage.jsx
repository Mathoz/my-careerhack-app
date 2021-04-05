import React, { Component } from 'react'

export class CustomizeImage extends Component {
    render() {
        return (
            <div>
                <h1>Customize Image</h1>
                <input type="text"/>
                <input type="range" min="0" max="200" />
                <p>...x ...px</p>
            </div>
        )
    }
}

export default CustomizeImage
