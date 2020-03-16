import React from 'react';
import PlusMinusButton from '../ui/PlusMinusButton';
import BookForm from './bookForm'

class NewBookCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isBookFormVisible: false,
    }
  }

  plusMinusButtonHandler(e){
    this.setState({ isBookFormVisible : e }) 
  }
  submitHandler = (e) => {
    if(this.props.submitHandler && typeof this.props.submitHandler === "function" )
    return this.props.submitHandler('submit');
  }

	render(){
		return(
      <div className="w-full md:w-6/12 lg:w-3/12 px-2 h-auto  my-2 rounded-2xl">
        <div className="w-full h-full py-6 px-6 rounded-2xl bg-white flex flex-col justify-center bg-gray-100  shadow-lg">
          <PlusMinusButton onChange={(e) => this.plusMinusButtonHandler(e)}></PlusMinusButton>
          {this.state.isBookFormVisible && (<BookForm></BookForm>)} 
        </div>
      </div> 
		);
	}
};

export default NewBookCard;