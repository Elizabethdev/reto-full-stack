# Reto Full stack 
Administrar catálogos con MongoDB, React, Express y Node js

## Para ejecutar la aplicación Backend

Moverse al directorio backend

### `cd backend`

Descargar paquetes y dependencias:

### `npm install`

Ejecutar la aplicación Backend en modo desarrollo .<br />

### `npm run dev`

** HOST
### localhost:4000

Nota: en la consola debe aparecer el mensaje:

### `DB conectada`

## Para ejecutar la aplicación Frontend

Moverse al directorio frontend

### `cd frontend`

Descargar paquetes y dependencias:

### `npm install`

Ejecutar la aplicación Frontend en modo desarrollo.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

** Importante tener el archivo ejemplo.env.development.local como:<br />
### `.env.development.local`

** HOST
### localhost:3000

## Pruebas en movil
<div class="highlight highlight-source-shell">
  <pre>
    Para realizar las pruebas desde el movil, conectarlo a la misma red y cambiar 
    'localhost' en .env.development.local por la ip de tu computadora.
    Vuelve a ejecutar: 'npm run start'
  </pre>
</div>

## MongoDB
<div class="highlight highlight-source-shell">
  <pre>
    Base de datos en la nube, la cadena de conexion esta configurada en backend/variables.env
    cambiar la variable 'DB_MONGO' actual por DB_MONGO=mongodb://localhost:27017/local, 
    para pruebas en local con mongoDB compass.
    Modelos:

    catalogos.categorias: {
      nombre:{
        type: String,
        require: true,
        trim: true,
        unique: true
      },
      created_at: {
        type: Date,
        default: Date.now()
      }
    },

    catalogos.libros: {
      titulo:{
        type: String,
        require: true,
        trim: true
      },
      autor:{
        type: String,
        require: true,
        trim: true
      },
      editorial:{
        type: String,
        require: true,
        trim: true
      },
      categoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        require: true
      },
      descripcion:{
        type: String,
        require: true,
        trim: true
      },
      stock:{
        type: Number,
        default: 0
      },
      created_at: {
        type: Date,
        default: Date.now()
      },
      created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
      }
    },

    catalogos.usuarios: {
      nombre:{
        type: String,
        require: true,
        trim: true
      },
      email: {
        type: String,
        require: true,
        trim: true,
        unique: true
      },
      password: {
        type: String,
        require: true,
        trim: true
      },
      created_at: {
        type: Date,
        default: Date.now()
      }
    }
  </pre>
</div>
