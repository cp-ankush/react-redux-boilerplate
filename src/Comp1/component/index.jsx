import React, { Component } from 'react';
import Container from '../container'


class Comp1 extends Component {

  componentDidMount() {
    this.props.getComponentDataAction()
  }

  render() {
    console.log("this.props::::", this.props)
    return (
      <div>
        My string is {this.props.data}
      </div>
    );
  }
}

export default Container(Comp1);
