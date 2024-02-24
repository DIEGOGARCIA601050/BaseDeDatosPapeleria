import { app, json, e } from "./express.js";
import { pool } from "./database/postgresql.js";
//import { Cors } from "./cors.js";
import path, {} from 'node:path'

export const PORT = process.env.PORT || 3000
// client.connect();

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "https://bookish-space-halibut-qrgpq7vqjjrf46vr-5173.app.github.dev");
  next();
});

app.use(function(req, res, next) {
  res.set("Access-Control-Allow-Origin", "https://verbose-orbit-g9w7q4x4x672wj4q-3000.app.github.dev");
  next();
});

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