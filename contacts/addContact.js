const { v1 } = require('uuid');
const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: v1(),
      name,
      email,
      phone,
    };
    const newContacts = [...contacts, newContact];
    await updateContacts(newContacts);
    return newContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = addContact;
