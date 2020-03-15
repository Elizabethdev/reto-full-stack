import React from 'react';

class ListadoCategorias extends React.Component{

  constructor(props) {
    super(props);
  }

  renderLi(items) {
    let elements = [];
    if(items){
      elements = items.map((data) =>
        <li key={data.id} className="py-1 px-4  text-teal-400 hover:text-teal-600 hover:rounded-lg">
          <a className="text-sm font-bold" href="#">#{data.nombre}</a>
          {/* <button 
            type="button" 
            className="py-1 px-4 text-teal-400 hover:text-teal-600 hover:rounded-lg">
            #{data.nombre}
          </button> */}
        </li>
      );
    }
    return elements
  }

	render(){
		return(
      <ul className="flex flex-col w-full text-base ">
        {this.renderLi(this.props.items)}
      </ul>
		);
	}
};

export default ListadoCategorias;