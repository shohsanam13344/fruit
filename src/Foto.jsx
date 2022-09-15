import React, { Component } from "react";
import './index.css';

class Foto extends Component {

    render() {
        console.log(this)
        return(
            <div>
                <img src={this.props.title.image} alt='fruit' />
                <h2>{this.props.title.name}</h2>
            </div>
        )
    }
}

export default Foto