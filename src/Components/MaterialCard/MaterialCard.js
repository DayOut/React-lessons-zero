import React from 'react';
import './MaterialCard.css';

export default class MaterialCard extends React.Component
{
  state ={};

  constructor (props){
    super();
    this.state = {...props};    
  }

  render() {
    let {
      children,
      className,
      title,
      ...other} = this.props;

      console.log(other);

      className = (className === undefined ? "" : className);

    return (
      <div className={"materializeCard " + className}>
        <div className={'cardTitle'}>{title}</div>
        {this.state.children}
      </div>
    );
  }
}