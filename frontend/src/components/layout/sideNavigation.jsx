import React, {useState, useContext, useEffect} from 'react';
import PlusMinusButton from '../ui/PlusMinusButton';
import CategoryForm from '../categorias/categoryForm';
import ListadoCategorias from '../categorias/listadoCategorias';
import CategoriaContext from '../../context/categorias/categoriasContext';

const Sidebar = () => {
  const [isCategoryFormVisible, setCategoryFormVisible] = useState(false);

  const plusMinusButtonHandler = (e) => {
    setCategoryFormVisible(e);
  }

  const categoriaContext = useContext(CategoriaContext);
  const {categorias, getCategorias} = categoriaContext;

  useEffect(() => {
    getCategorias();
  }, [])

  return(
    <div className="flex px-2 py-6">
      <div className="w-3/12 mx-2 bg-white rounded-lg shadow-lg">
        <div className="py-4 px-4 text-base text-center">
          <PlusMinusButton onChange={plusMinusButtonHandler}></PlusMinusButton>
          <div className={`h-auto ${ isCategoryFormVisible ? "fadeIn" : " fadeOut"}`}>
            <div className={`${ isCategoryFormVisible ? "h-full visible" : "h-0 invisible"}`}>
              <CategoryForm></CategoryForm>
            </div>
          </div>
        </div>

        <ListadoCategorias items={categorias}></ListadoCategorias>
      </div>
    </div>
  );
}

export default Sidebar;