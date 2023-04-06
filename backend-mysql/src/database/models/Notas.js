module.exports = NotasModel = (sequelize, DataTypes) => {
  const Notas = sequelize.define('Notas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    vendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false,
      tableName: 'notas',
      underscored: true,
    });

    
  Notas.associate = (models) => {
    Notas.hasMany(
      models.ItensNota,
      { foreignKey: 'idNota', as: 'ItensNota' },
    );
  };

  return Notas;
};
