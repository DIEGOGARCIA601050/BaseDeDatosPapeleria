import { app } from "./express.js";
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Servidor escuchando en http://localhost:${PORT}`);})