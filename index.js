import { app, json, e } from "./express.js";
import { pool } from "./database/postgresql.js";
import path, {} from 'node:path'

export const PORT = process.env.PORT || 3000
// client.connect();


app.use(e.static('public'))
app.use(json())
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
})
app.get('/datos', (req, res) => {
    pool.query('SELECT * FROM registrados', (err, resp) => {
        if (err) {
          console.error(err);
          return;
        }
        const data = resp.rows
        res.send(data)
      });
})
app.get('/datos/catalogo', (req, res) => {
  res.sendFile(path.resolve('./public/datos.html'))
})
app.get('/datos/crear-nuevo', (req, res) => {
    res.sendFile(path.resolve('./public/crear-nuevo.html'))
})
app.post('/datos/crear-nuevo', (req, res) => {
    const data = req.body
    console.log(data);
    pool.query(`insert into registrados(nombre, apellido, contraseña, edad)
    values ('${data.nombre}', '${data.apellido}', '${data.contrasena}', '${data.edad}')`, (err, resp) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(resp.rows)
      })
})
  
app.listen(PORT, () => {console.log(`Servidor escuchando en http://localhost:${PORT}`);})