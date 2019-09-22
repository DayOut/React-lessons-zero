import React from 'react';
import './MaterialButton.css';

export default class MaterialButton extends React.Component
{
    constructor (props){
      super();
      let newState = {...props};
      newState.disabled = (newState.disabled === undefined ? '' : newState.disabled);

      this.state = newState
    }
    
    state = {}
    
    render() {
        /*
          Is it correct to use children in button? 
          It would be better to use "value" for text in the button, 
          to avoid different elems inside the button...
        */
        return (
          <button 
            className={"materializeBtn " + this.state.className} 
            disabled={this.state.disabled}
          > 
            {this.props.children} 
          </button>
        );
      }
}