const { User } = require('../models');

const userdata = [
    {
        username: 'abby123',
        email: 'abby.abby@gmail.com',
        password: 'wine'
    },
    {
        username: 'naomi456',
        email: 'naomi.naomi@gmail.com',
        password: 'wine'
    },
    {
        username: 'tammy789',
        email: 'tammy.tammy@gmail.com',
        password: 'wine'
    },
    {
        username: 'rebecca000',
        email: 'rebecca.rebecca@gmail.com',
        password: 'wine'
    },
    {
        username: 'devonair',
        email: 'devon.devon@gmail.com',
        password: 'wine'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;