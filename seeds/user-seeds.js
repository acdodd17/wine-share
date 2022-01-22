const { User } = require('../models');

const userdata = [
    {
        username: 'abby123',
        email: 'abby.abby@gmail.com',
        password: 'w1n3luvR1'
    },
    {
        username: 'naomi456',
        email: 'naomi.naomi@gmail.com',
        password: 'w1n3luvR2'
    },
    {
        username: 'tammy789',
        email: 'tammy.tammy@gmail.com',
        password: 'w1n3luvR3'
    },
    {
        username: 'rebecca000',
        email: 'rebecca.rebecca@gmail.com',
        password: 'w1n3luvR4'
    },
    {
        username: 'devonair',
        email: 'devon.devon@gmail.com',
        password: 'w1n3guy1'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;