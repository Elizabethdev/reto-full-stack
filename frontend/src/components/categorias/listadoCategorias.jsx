import React, {useContext} from 'react';
import CategoriaContext from '../../context/categorias/categoriasContext';
import LibroContext from '../../context/libros/librosContext';

const ListadoCategorias = (props) => {

  const categoriaContext = useContext(CategoriaContext);
  const { categoriaActual } = categoriaContext;

  const librosContext = useContext(LibroContext);
  const { getLibros } = librosContext;

  const seleccionarCategoria = (data) => {
    categoriaActual(data);
    getLibros(data._id);
  }

  const renderLi = (items) => {
    let elements = [];
    if(items){
      elements = items.map((data) =>
        <li key={data._id} className="py-1 px-4  text-teal-400 hover:text-teal-600 hover:rounded-lg">
          <button 
            type="button" 
            onClick={() => seleccionarCategoria(data)}
            className="py-1 px-4 text-teal-400 hover:text-teal-600 hover:rounded-lg">
            #{data.nombre}
          </button>
        </li>
      );
    }
    return elements
  }

		return(
      <ul className="flex flex-col w-full text-base ">
        {renderLi(props.items)}
      </ul>
		);
};

export default ListadoCategorias;