const fs = require('fs').promises;
const contactsPath = require('./contactsPath');

const updateContacts = async contacts => {
  const str = JSON.stringify(contacts);
  try {
    await fs.writeFile(contactsPath, str);
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

module.exports = updateContacts;
