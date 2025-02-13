# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que corre la app
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "index.js"]
