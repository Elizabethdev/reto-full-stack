import React, {useState, useContext} from 'react';
import CategoriaContext from '../../context/categorias/categoriasContext';

const CategoryForm = () => {
  const [categoria, guardarCategoria] = useState({
    nombre: ''
  });

  const {nombre} = categoria;

  const onChangeCategoria = e => {
    guardarCategoria({
      ...categoria,
      [e.target.name] : e.target.value
    })
  }

  const categoriaContext = useContext(CategoriaContext);
  const { nuevaCategoria } = categoriaContext;

  const onSubmitCategoria = e => {
    e.preventDefault();
    nuevaCategoria({nombre});
    guardarCategoria({
      nombre: ''
    })
  }

  return(
    <form onSubmit={onSubmitCategoria} className="w-full max-w-sm">
      <div className="flex items-center py-2">
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="grid-last-name" 
          type="text" 
          name="nombre"
          value={nombre}
          onChange={onChangeCategoria}
          placeholder="Categoría" />
        <button className="flex-shrink-0 bg-teal-400 hover:bg-teal-700 border-teal-400 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2" 
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;