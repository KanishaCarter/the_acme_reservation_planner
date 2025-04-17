const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_travel_db');

module.exports = {
  client
}; 

const createTables = async()=> {
    const SQL = `
        DROP TABLE IF EXISTS vacations;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS places;
        CREATE TABLE users(
            id UUID PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE
        );
        CREATE TABLE places(
            id UUID PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE
        );
        CREATE TABLE vacations(
            id UUID PRIMARY KEY,
            departure_date DATE NOT NULL,
            user_id UUID REFERENCES users(id) NOT NULL,
            place_id UUID REFERENCES places(id) NOT NULL
        );
    `;
    
    await client.query(SQL);
};
                    
