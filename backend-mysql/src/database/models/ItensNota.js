module.exports = (sequelize, DataTypes) => {
  const ItensNota = sequelize.define('ItensNota', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    idNota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    idPedido: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    numeroItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'número_item',
    },
    quantidadeProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'quantidade_produto',
    },
  },
  {
    timestamps: false,
    tableName: 'itens_nota',
    underscored: true
  });

  ItensNota.associate = models => {
    ItensNota.belongsTo(models.Notas, {
      foreignKey: 'id_nota',
      as: 'nota'
    });

    ItensNota.belongsTo(models.Pedidos, {
      foreignKey: 'id_pedido',
      as: 'pedido'
    });
  };

  return ItensNota;
};
