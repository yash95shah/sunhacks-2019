function getNotification() {}

module.export = getNotification;

e.get("/api/user", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.User.findAll({})
    .then(function(dbUsers) {
      // remove user passwords before sending to the front end.
      // look up how to remove a field with sequelize when searching for users
      // We have access to the users as an argument inside of the callback function
      res.send(dbUsers);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});
