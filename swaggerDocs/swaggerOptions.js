const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'TestTaskRestApi0',
      description: 'REST API for test task',
      contact: {
        name: 'RomanFokin1804',
      },
      servers: ['https://testtaskrestapi0.herokuapp.com'],
    },
    host: 'testtaskrestapi0.herokuapp.com',
    tags: [
      {
        name: 'File',
        description: 'Api for favourites',
      },
      {
        name: 'Auth',
        description: 'Api for authorization',
      },
      {
        name: 'Info',
        description: 'Api to verify user existence',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./swaggerDocs/*.js'],
};

module.exports = swaggerOptions;
