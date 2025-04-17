"scripts": {
    "start:dev": "nodemon server/index.js"
};

const { client } = require('./db');

const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
};

init();

const init = async()=> {
    console.log('connecting to database');
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('created tables');
};

