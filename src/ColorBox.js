import React, { Component } from 'react';

class ColorBox extends Component {
  
  // state = {
  //   todos: [
      
  //   ]
  // }
  render() {
   
      return this.props.opacity >= 0.2 ? (
        <div className="color-box" style={{opacity: this.props.opacity}}>
       
              <ColorBox opacity={this.props.opacity - 0.1} />
            
      </div>) : null
    
    
    
  
  
}
}

export default ColorBox