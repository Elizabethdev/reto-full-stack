import React, {useState, useContext} from 'react';
import LibroContext from '../../context/libros/librosContext';

import BookForm from './bookForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookCard= (props) => {

  const libroContext = useContext(LibroContext);
  const { libroActual, libroSelected } = libroContext;

  const seleccionarLibro = (book) => {
    libroActual(book);
  }

  const renderDetalle = (props) =>{
    return(
      <div>
        <div className="h-12 md:h-8 m-h-full">
          <h2 className="text-xl lg:text-xs font-bold">{props.book.titulo}</h2>
        </div>
        <span className="text-xl lg:text-xs my-2">{props.book.autor}</span>
        <div className="h-36 lg:h-32 my-2 max-h-full">
            <p className="text-xl lg:text-xs">{props.book.descripcion}</p>
        </div>
        <div className="h-12 my-4">
          <p className="text-xl lg:text-xs font-bold">{props.book.editorial}</p>
          <span className="text-xl lg:text-xs text-teal-400">#{props.book.categoria.nombre}</span>
        </div>
      </div>
    );
  }

		return(
      <div className="w-full md:w-6/12 lg:w-3/12 px-2 h-auto  my-2 rounded-2xl ">
        <div className="bg-cover bg-center  shadow-lg rounded-2xl pt-40 relative w-full" style={{backgroundImage: `url("./assets/img/books.jpg")`}}>
          <div onClick={() => seleccionarLibro(props.book)} className="absolute rounded-full h-8 w-8 bg-white flex items-center justify-center" style={{top:'20px', right:'10px'}}>
            <FontAwesomeIcon icon={'pen'}   className="text-teal-400"/>
          </div>
          <div className="absolute rounded-full h-8 w-8 bg-white flex items-center justify-center" style={{top:'60px', right:'10px'}}>
            <FontAwesomeIcon icon={'trash'}   className="text-red-400"/>
          </div>
          <div className="w-full h-88 lg:h-80 py-6 px-6 rounded-2xl bg-white flex flex-col">
            { libroSelected && libroSelected._id == props.book._id ? (<BookForm editando libro={libroSelected}></BookForm>) : (
              renderDetalle(props))}
          </div>
        </div>
      </div>
		);
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