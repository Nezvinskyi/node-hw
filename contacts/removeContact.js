const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const removeContact = async contactId => {
  try {
    const contacts = await listContacts();
    const index = contacts.find(contact => contact.id === contactId);
    if (index === -1) throw new Error('Error: ID is incorrect');
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    await updateContacts(newContacts);
    return `Contact (id: ${contactId}) was successfully deleted`;
  } catch (error) {
    return error.message;
  }
};

module.exports = removeContact;
