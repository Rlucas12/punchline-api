const Album = sequelize.define('album', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    artistId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: Artist,
        key: 'id',
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
});