# Imagen
FROM node:14
# Directorio donde vamos a trabajar
WORKDIR /app
# Nos aseguramos de que se tengan los package json en nuestra carpeta
COPY package.json package-lock.json /app/
COPY src/* /app/src/
RUN npm i
EXPOSE 4200
CMD ["npm", "start"]
