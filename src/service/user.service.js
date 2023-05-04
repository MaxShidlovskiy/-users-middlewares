const fs = require(`fs`);
const path = `./storage/storage.json`;

function getAllUsers() {
  const array = JSON.parse(fs.readFileSync(path));
  return array;
}

function getUserById(id) {
  const array = JSON.parse(fs.readFileSync(path));

  const filtered = array.filter(el => el.id == id);
  return filtered;
}

function createUser(name, surname, email, pwd) {
  const array = JSON.parse(fs.readFileSync(path));

  array.push({ id: array.length + 1, name, surname, email, pwd });

  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

function updateUserById(id, name, surname, email, pwd) {
  const array = JSON.parse(fs.readFileSync(path));

  const filtered = array.filter(el => el.id != id);
  if (array.length == filtered.length) throw new Error(`id is not a found`);

  filtered.push({ id, name, surname, email, pwd });

  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteUser(id) {
  const arr = JSON.parse(fs.readFileSync(path));

  const filtered = arr.filter(el => el.id != id);

  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

module.exports = { getAllUsers, getUserById, createUser, updateUserById, deleteUser };
