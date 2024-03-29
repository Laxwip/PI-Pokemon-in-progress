const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (Database) => {
  Database.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false
  })
}
