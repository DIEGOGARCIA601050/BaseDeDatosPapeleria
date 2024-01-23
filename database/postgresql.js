import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: 'postgres://fl0user:ePyRIhaS1u3l@ep-blue-wood-89329104.ap-southeast-1.aws.neon.fl0.io:5432/Login?sslmode=require'
})
  