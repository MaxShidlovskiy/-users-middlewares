function isValidUserData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error(`name is not a name`);
  if (!isNaN(name)) throw new Error(`name is a number`);

  if (!surname) throw new Error(`is not a surname`);
  if (!isNaN(surname)) throw new Error(`surname is a number`);

  if (!email) throw new Error(`is not a email`);
  if (!/^[a-zA-Z0-9\_\-\.]+@[a-zA-Z]+\.[a-z]{1,5}/gm.test(email)) {
    throw new Error(`это не почта`);
  }

  if (!pwd) throw new Error(`is not a pwd`);
  if (pwd.length < 8) throw new Error(`короткий пароль`);
  next();
}

function isValidUserId(req, res, next) {
  const { id } = req.params;

  if (!id) throw new Error('You didnt pass id');
  if (isNaN(id)) throw new Error('id is not a number');

  next();
}

module.exports = { isValidUserData, isValidUserId };
