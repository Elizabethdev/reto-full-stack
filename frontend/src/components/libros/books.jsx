import React, {useState} from 'react';
import Header from '../layout/header';
import SideNav from '../layout/sideNavigation'

const Libros = () => {

  return(
    <React.Fragment>
      <Header/>
      <div className="h-screen bg-gray-200">
        <SideNav></SideNav>


      </div>
    </React.Fragment>
  );
}

export default Libros;