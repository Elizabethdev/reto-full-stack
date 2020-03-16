import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertaContext from '../../context/alertas/alertaContext';
import CategoriaContext from '../../context/categorias/categoriasContext';
import LibroContext from '../../context/libros/librosContext';

import Header from '../layout/header';
import SideNav from '../layout/sideNavigation';
import NewBookCard from './newBookCard';
import BookCard from './bookCard';
import Alert from '../ui/alert';

const Libros = () => {
  const alertaContext = useContext(AlertaContext)
  const {alerta} = alertaContext;

  const categoriaContext = useContext(CategoriaContext);
  const { categoriaSelected } = categoriaContext;

  const librosContext = useContext(LibroContext);
  const { libros } = librosContext;
  
  const authContext = useContext(AuthContext)
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  const renderBook = (book, key) => {  
    let item = <BookCard key={key} book={book}/>
    return item;
  }

  const renderBooks = (books) => {
    let elements = [];
    if(books){
      elements = books.map((item, key) => {
        return renderBook(item, key);
      });
    };
    return elements; 
  }

  return(
    <React.Fragment>
      <Header/>
      { alerta ? (<Alert alert={alerta}></Alert>) : null}
      <div className="h-screen bg-gray-200">
        <div className="flex flex-col md:flex-row px-2 py-6">
          <SideNav></SideNav>

          <div className="w-full md:w-9/12 mx-2 bg-white rounded-lg shadow-lg h-full">
            <div className="px-8 py-8">
              <div className="flex flex-wrap justify-center md:justify-start -mx-2">
                { categoriaSelected ? (<NewBookCard></NewBookCard>) : null}
                {renderBooks(libros)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Libros;