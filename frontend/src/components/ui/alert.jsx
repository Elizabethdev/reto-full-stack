import React from 'react';

class Alert extends React.Component{

  constructor(props) {
    super(props);
  }

	render(){
		return(
      <div className={` alert ${ this.props.alert.type}`}  role="alert">
        <div className="flex">
          <div className="py-1"></div>
          <div>
            <p className="font-bold">{this.props.alert.titulo}</p>
            <p className="text-sm">{this.props.alert.msj}</p>
          </div>
        </div>
      </div>
		);
	}
};

Alert.defaultProps = {
  alert: {
    titulo: 'Título de error',
    msj: 'Este es un mensaje de error que puedes configurar',
    type: 'alert-error',
  }
};

export default Alert;