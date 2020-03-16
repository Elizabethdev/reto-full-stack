import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PlusMinusButton extends React.Component{

  constructor(props) {
    super(props);
    this.state = {show:false};
  }

  clickHandler() {
    this.setState({show: !this.state.show}, () => {
      if(this.props.onChange && typeof this.props.onChange === "function" )
        return this.props.onChange(this.state.show);
    })
  }

	render(){
		return(
      <button onClick={() => this.clickHandler()} className="font-bold text-teal-400"><FontAwesomeIcon icon={`${ this.state.show ? this.props.iconHide : this.props.iconShow}`}   size="2x" className="mx-2"/></button>
		);
	}
};

PlusMinusButton.defaultProps = {
  iconShow: 'plus-square',
  iconHide: 'minus-square',
};

export default PlusMinusButton;