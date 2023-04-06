module.exports = PedidosModel = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define(
    'Pedidos',
    {
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
      cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valorTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'valor_total',
      },
    },
    {
      timestamps: false,
      tableName: 'pedidos',
      underscored: true,
    },
  );

  Pedidos.associate = (models) => {
    Pedidos.hasMany(
      models.ItensPedido,
      { foreignKey: 'idPedido', as: 'ItensPedido' },
    );
  };

  return Pedidos;
};