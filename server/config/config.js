//================
// Puerto
//================
process.env.PORT = process.env.PORT || 8080;

// ===============
// Entorno
// ===============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============
// Vencimiento del token
// ===============

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===============
// Semilla de autenticación
// ===============

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===============
// Base de datos
// ===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===============
// Google Client ID
// ===============

process.env.CLIENT_ID = process.env.CLIENT_ID || "463038027301-8ehml4qjs0i6bor4av0rp6kqpm8406hn.apps.googleusercontent.com";