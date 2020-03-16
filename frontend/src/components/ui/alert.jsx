import React from 'react';

class Alert extends React.Component{

  constructor(props) {
    super(props);
  }

	render(){
		return(
      <div className={` alert ${ this.props.alert.categoria}`}  role="alert">
        <div className="flex">
          <div className="py-1"></div>
          <div>
            <p className="font-bold">Alerta</p>
            <p className="text-sm">{this.props.alert.msg}</p>
          </div>
        </div>
      </div>
		);
	}
};

Alert.defaultProps = {
  alert: {
    msg: 'Este es un mensaje de error que puedes configurar',
    categoria: 'alert-error',
  }
};

export default Alert;