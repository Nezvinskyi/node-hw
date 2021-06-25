const listContacts = require('./listContacts');

const getContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contactById = contacts.find(contact => contact.id === contactId);
    if (!contactById) {
      throw new Error('Error: id is incorrect');
    }
    return contactById;
  } catch (error) {
    return error.message;
  }
};

module.exports = getContactById;
