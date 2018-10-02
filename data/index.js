(function () {
  window.API = {}

  function fail () {
    return Math.floor(Math.random()*(5-1)) === 3
  }

  function generateId () {
    return Math.random().toString(36).substring(2);
  }

  var contacts = [
    {
      id: generateId(),
      name: 'Nasim Noori',
      gender: 'male',
      email: 'nasim.noori3@gmail.com',
      block: false,
    },
    {
      id: generateId(),
      name: 'Uzair Noori',
      gender: 'male',
      email: 'uziarnoori@gmail.com',
      block: false,
    },
    {
      id: generateId(),
      name: 'Huda',
      gender: 'female',
      email: 'huda@gmail.com',
      block: true,
    }
  ];

  API.fetchContacts = function () {
    return new Promise((res, rej) => {
      setTimeout(function () {
        res(contacts)
      }, 2000)
    })
  }

  API.saveContact = function (name, gender, email) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const contact = {
          id: generateId(),
          name: name,
          gender: gender,
          email: email,
          block: false,
        }
        contacts = contacts.concat([contact]);
        fail() ? rej(contact) : res(contact);
      }, 300)
    })
  }

  API.deleteContact = function (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        contacts = contacts.filter((contact) => contact.id !== id);
        fail() ? rej(): res(contacts);
      }, 300)
    });
  }

  API.saveContactBlock = function (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        contacts = contacts.map((contact) => contact.id !== id ? contact :
          Object.assign({}, contact, {block: !contact.block})
        );

        fail() ? rej(): res(contacts);
      }, 300)
    });
  }
})()
