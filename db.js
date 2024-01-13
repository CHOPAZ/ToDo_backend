import pkg from 'pg';
const { Client } = pkg;
 
export const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'example',
})

await client.connect();

