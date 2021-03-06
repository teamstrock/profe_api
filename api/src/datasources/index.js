require('dotenv').config();
const Sequelize = require('sequelize');

DataTypes = Sequelize.DataTypes

const ProfeDB = new Sequelize(`${process.env.DBNAME}`, `${process.env.DBUSER}`, `${process.env.DBPASS}`, 
				{ dialect: 'postgres', host: `${process.env.DBHOST}`, port: `${process.env.DBPORT}`});

ProfeDB
	.authenticate()
	.then(() => {
		console.log('connected to profe DB');
	})
	.catch((err) => {
		console.error('unable to ceonnect to profe DB ', err);
	});

const Profe = ProfeDB.define('profe', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		apellidoPaterno: {
			field: 'apellido_paterno',
			allowNull: false,
			type: Sequelize.STRING	
		},
		apellidoMaterno: {
			field: 'apellido_materno',
			allowNull: true,
			type: Sequelize.STRING	
		},
		email: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		password: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		verificado: {
			allowNull: false,
			type: Sequelize.BOOLEAN	
		}	
	}, 
	{
		freezeTableName: true,
		timestamps: false,
	}
);

const Login = ProfeDB.define('login', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		id_profe: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		dia: {
			type: Sequelize.DATE,
			allowNull: true,
		}
	}, {
		freezeTableName: true,
		timestamps: false,
	}
);

const Estado = ProfeDB.define('estado', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING	
		},
	}, {
		freezeTableName: true,
		timestamps: false,
	}
);

const Municipio = ProfeDB.define('municipio', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		id_estado: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	}, {
		freezeTableName: true,
		timestamps: false,
	}
);

const Localidad = ProfeDB.define('localidad', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		cp: {
			allowNull: true,
			type: Sequelize.STRING	
		},
		id_municipio: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	}, {
		freezeTableName: true,
		timestamps: false,
	}
);

const Escuela = ProfeDB.define('escuela', 
	{
		id: {
			autoIncrement: true,
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		nombre: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		serviciosRegionales: {
			field: 'servicios_regionales',
			allowNull: true,
			type: Sequelize.STRING	
		},
		clave: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		zona: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		turno: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		sector: {
			allowNull: false,
			type: Sequelize.STRING	
		},
		organismoPublico: {
			field: 'organismo_publico',
			allowNull: true,
			type: Sequelize.STRING	
		},
		calleYNumero: {
			field: 'calle_y_numero',
			allowNull: true,
			type: Sequelize.STRING	
		},
		numeroInterior: {
			field: 'numero_interior',
			allowNull: true,
			type: Sequelize.STRING	
		},
		cp: {
			allowNull: true,
			type: Sequelize.STRING	
		},
		idEstado: {
			field: 'id_estado',
			allowNull: false,
			type: Sequelize.INTEGER	
		},
		idMunicipio: {
			field: 'id_municipio',
			allowNull: false,
			type: Sequelize.INTEGER	
		},
		idLocalidad: {
			field: 'id_localidad',
			allowNull: false,
			type: Sequelize.INTEGER	
		},
		fechaActualizacion: {
			field: 'fecha_actualizacion',
			allowNull: false,
			type: Sequelize.STRING
		}
	}, 
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports.Profe = Profe;
module.exports.Login = Login;
module.exports.Estado = Estado;
module.exports.Municipio = Municipio;
module.exports.Localidad = Localidad;
module.exports.Escuela = Escuela;
module.exports.ProfeDB = ProfeDB;
