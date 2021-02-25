module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define("Example", {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    timestamps: true,
    updatedAt: false
  });

  return Example;
}
