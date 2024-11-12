# Quiosco
__Quiosco, simulacion de pedidos de comida de local de comidas rapidas__

## Correr en dev

1. Clonar el repositorio.
2. Instalar dependencias ```npm install```
3. Crear una copia del ***.env.template*** renombrarlo a ***.env*** y cambiar las variables de entorno.
4. levantar la base de datos ```docker compose up -d```
5. Correr las migraciones de [Prisma](https://www.prisma.io/) ```npx prisma migrate dev```
6. Ejecutar seed ```npx prisma db seed```
7. Correr el proyecto ```npm run dev```