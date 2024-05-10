const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Items Api', 
        description: 'Items Api'
    }, 
    host: 'localhost:3000',
    schemes: ['https', 'http']
}; 

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);