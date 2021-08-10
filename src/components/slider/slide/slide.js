import React, {Component} from 'react';
import './slide.sass';


export default class Slide extends Component {

    state = {
        mouseIn: false
    }

    inImage = () => {
        this.setState({
            mouseIn: true
        })
        
    }
    outImage = () => {
        this.setState({
            mouseIn: false
        })
    }
    render() {
        const zoom = this.state.mouseIn ? <img className="zoom" src={'/img/zoom2.png'} alt='zoom'/> : null;
        return (
            <div className="Slide" onMouseEnter={this.inImage} onMouseLeave={this.outImage}>
                <div>
                    <img className="image" src={this.props.imgUrl} alt='slide'/>
                    {zoom}
                </div>
            </div>
        );
    }
    
}