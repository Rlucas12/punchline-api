const Album = sequelize.define('album', {
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