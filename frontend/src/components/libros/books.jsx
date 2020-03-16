import React, {useContext, useEffect} from 'react';
import Header from '../layout/header';
import SideNav from '../layout/sideNavigation';
import AuthContext from '../../context/auth/authContext';
import NewBookCard from './newBookCard';
import BookCard from './bookCard';
import Alert from '../ui/alert';

const Libros = () => {
  const books = [
    {
      titulo: 'Título del libro',
      autor: 'Autor del libro',
      editorial: 'Editorial del libro',
      categoria: 'Categoría del libro',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque, sit libero nam illo  adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
    },
    {
      titulo: 'Título del libro',
      autor: 'Autor del libro',
      editorial: 'Editorial del libro',
      categoria: 'Categoría del libro',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque, sit libero nam illo  adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
    },
    {
      titulo: 'Título del libro',
      autor: 'Autor del libro',
      editorial: 'Editorial del libro',
      categoria: 'Categoría del libro',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque, sit libero nam illo  adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit...',
    }
  ]

  const authContext = useContext(AuthContext)
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  const renderBook = (book, key) => {  
    let item = <BookCard key={key} book0={book}/>
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
      <Alert></Alert>
      <div className="h-screen bg-gray-200">
        <div className="flex flex-col md:flex-row px-2 py-6">
          <SideNav></SideNav>

          <div className="w-full md:w-9/12 mx-2 bg-white rounded-lg shadow-lg h-full">
            <div className="px-8 py-8">
              <div className="flex flex-wrap justify-center md:justify-start -mx-2">
                <NewBookCard></NewBookCard>
                {renderBooks(books)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Libros;