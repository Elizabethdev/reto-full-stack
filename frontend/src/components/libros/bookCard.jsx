import React from 'react';

class BookCard extends React.Component{

  constructor(props) {
    super(props);
  }

	render(){
		return(
      <div className="w-full md:w-6/12 lg:w-3/12 px-2 h-auto  my-2 rounded-2xl ">
        <div className="bg-cover bg-center  shadow-lg rounded-2xl pt-40" style={{backgroundImage: `url("./assets/img/books.jpg")`}}>
          <div className="w-full h-88 lg:h-80 py-6 px-6 rounded-2xl bg-white flex flex-col">
            <div className="h-12 md:h-8 m-h-full">
              <h2 className="text-xl lg:text-xs font-bold">{this.props.book.titulo}</h2>
            </div>
            <span className="text-xl lg:text-xs my-2">{this.props.book.autor}</span>
            <div className="h-36 lg:h-32 my-2 max-h-full">
                <p className="text-xl lg:text-xs">{this.props.book.descripcion}</p>
            </div>
            <div className="h-12 my-4">
              <p className="text-xl lg:text-xs font-bold">{this.props.book.editorial}</p>
              <span className="text-xl lg:text-xs text-teal-400">#{this.props.book.categoria.nombre}</span>
            </div>
          </div>
        </div>
      </div>
		);
	}
};

BookCard.defaultProps = {
  book: {
    titulo: 'Título del libro',
    autor: 'Autor del libro',
    editorial: 'Editorial del libro',
    categoria: 'Categoría del libro',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque, sit libero nam illo  adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
  },
};

export default BookCard;