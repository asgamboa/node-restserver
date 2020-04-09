//================
// Puerto
//================
process.env.PORT = process.env.PORT || 8080;

// ===============
// Entorno
// ===============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============
// Base de datos
// ===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://andres-gamboa:rAbzbend1OaH85v0@cluster0-hvvmp.mongodb.net/cafe?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
}

process.env.URLDB = urlDB;