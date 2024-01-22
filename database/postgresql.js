import pkg from 'pg';
const { Client, Pool } = pkg;
export const client = new Client({
    user: 'fl0user',
    host: 'ep-blue-wood-89329104.ap-southeast-1.aws.neon.fl0.io',
    database: 'Login',
    password: 'ePyRIhaS1u3l',
    port: 5432,
  });
export const pool = new Pool({
  connectionString: 'postgres://fl0user:ePyRIhaS1u3l@ep-blue-wood-89329104.ap-southeast-1.aws.neon.fl0.io:5432/Login?sslmode=require'
})
  