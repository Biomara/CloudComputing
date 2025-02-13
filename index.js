const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// 🔹 Sirve los archivos estáticos desde la carpeta "public"
app.use(express.static("public"));

// 🔹 Ruta para obtener las imágenes de Docker
app.get("/images", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:2375/images/json");
        res.json(response.data);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

// 🔹 Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
