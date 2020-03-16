import React from 'react';

class HeaderImage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

	render(){
		return(
	    <div className="w-full bg-grey-200 bg-cover bg-center flex items-center shadow-lg" style={{backgroundImage: `url(${this.props.urlCover})`, height: '200px'}} >
        <h1 className="mx-auto text-white text-5xl">{this.props.title}</h1>
      </div>        
		);
	}
}

HeaderImage.defaultProps = {
  title: 'Catálogo de libros',
  urlCover: './assets/img/headerimg.jpg',
};

export default HeaderImage;