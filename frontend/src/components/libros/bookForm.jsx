import React, {useState, useContext, useEffect} from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import CategoriaContext from '../../context/categorias/categoriasContext';
import LibroContext from '../../context/libros/librosContext';

const Bookform = () => {

  const alertaContext = useContext(AlertaContext)
  const {mostrarAlerta} = alertaContext;

  const categoriaContext = useContext(CategoriaContext);
  const { categoriaSelected, categorias, categoriaActual } = categoriaContext;

  const libroContext = useContext(LibroContext);
  const { nuevoLibro } = libroContext;

  const [libro, guardarLibro] = useState({
    titulo: '',
    autor: '',
    editorial: '',
    descripcion: '',
    categoria: categoriaSelected ? categoriaSelected[0]._id : ''
  });

  useEffect(() =>{
    guardarLibro({
      ...libro,
      categoria : categoriaSelected[0]._id
    })
  }, [categoriaSelected])

  const {titulo, autor, editorial, descripcion, categoria} = libro;

  const onChangeLibro = e => {
    guardarLibro({
      ...libro,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(titulo.trim() === '' || autor.trim() === '' || editorial.trim() === '' || descripcion.trim() === '' || categoria.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alert-error');
      return;
    }
    nuevoLibro({
      titulo,
      autor,
      editorial,
      descripcion,
      categoria
    });

    categoriaActual(categoria);
  }

  const renderSelectOptions = (categories) => {
    let options = [];
    if(categories){
      options = categories.map((data) =>
        <option 
          key={data._id}
          value={data._id}
        >
        {data.nombre}
        </option>
      );
    }

    return (
      <select 
        className="block appearance-none w-full bg-transparent border-b border-gray-200 text-sm text-gray-500 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500" 
        name="categoria"
        id="categoria" 
        name="categoria"
        value={categoria}
        onChange={onChangeLibro}
        >
        <option>Categorías</option>
        {options}
      </select>
    )
  }

  return(
    <form onSubmit={onSubmit} className="w-full hadow-lg rounded ">
      <div className="my-4">
        <h1 className="text-center text-teal-400 px-4 font-bold text-base">Nuevo libro</h1>
      </div>
      <div className="mb-4">
        <input className="appearance-none bg-transparent  w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
          type="text"
          id="titulo" 
          name="titulo"
          value={titulo}
          onChange={onChangeLibro}
          placeholder="Título"
        />
      </div>                  
      <div className="mb-4">
        <input className="appearance-none bg-transparent  w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
          type="autor"
          id="autor" 
          name="autor"
          value={autor}
          onChange={onChangeLibro}
          placeholder="Autor"
        />
      </div> 
      <div className="mb-4">
        <input className="appearance-none bg-transparent  w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
          type="text" 
          id="editorial" 
          name="editorial"
          value={editorial}
          onChange={onChangeLibro}
          placeholder="Editorial"
          />
      </div>
      <div className="mb-4">
        <input className="appearance-none bg-transparent  w-full text-sm text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b"
          type="text" 
          id="descripcion" 
          name="descripcion"
          value={descripcion}
          onChange={onChangeLibro}
          placeholder="Resumen" 
        />
      </div>                  
      <div className="mb-4 inline-block relative w-full">
        {renderSelectOptions(categorias)}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div> 
      <div className="flex items-center justify-between">
        <button className="w-full bg-teal-400 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit">
          Guardar
        </button>
      </div>   
    </form>             
  );
}

export default Bookform;