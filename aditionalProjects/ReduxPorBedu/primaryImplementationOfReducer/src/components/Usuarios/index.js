import React, { Component } from 'react';
import { connect } from 'react-redux';

class Usuarios extends Component {

	// async componentDidMount() {
	// 	const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
	// 	this.setState({
	// 		usuarios: respuesta.data
	// 	});
	// }

	ponerFilas = () => this.props.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

	render() {
		console.log( this.props ); //Puedes ver que dentro de los props esta parte de estado ( usuario: [] )
		return (
			<div>
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer; //Esta función se encarga de pasar el estado a los props
};

export default connect(mapStateToProps, {/*Accion Creator*/})(Usuarios);