process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/mobile';
} else {
  urlDB = process.env.MONGO_URI; //MONGO_URI es creada en heroku y el valor es asignado
}

process.env.URLDB = urlDB;