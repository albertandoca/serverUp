'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Partidos',
    [
      {
        id: 1, 
        detalle: 'UNIÓN POR LA ESPERANZA',
        lista: '1-5',
        urlLogo: 'lista1-5.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2, 
        detalle: 'PARTIDO SOCIEDAD PATRIOTICA "21 DE ENERO"',
        lista: '3',
        urlLogo: 'lista3.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3, 
        detalle: 'MOVIMIENTO ECUATORIANO UNIDO',
        lista: '4',
        urlLogo: 'lista4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4, 
        detalle: 'PARTIDO POLÍTICO AVANZA',
        lista: '8',
        urlLogo: 'lista8.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5, 
        detalle: 'PARTIDO FUERZA EC',
        lista: '10',
        urlLogo: 'lista10.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6, 
        detalle: 'PARTIDO IZQUIERDA DEMOCRÁTICA',
        lista: '12',
        urlLogo: 'lista12.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7, 
        detalle: 'MOVIMIENTO AMIGO',
        lista: '16',
        urlLogo: 'lista16.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8, 
        detalle: 'HONESTIDAD',
        lista: '17-51',
        urlLogo: 'lista17-51.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9, 
        detalle: 'MOVIMIENTO DE UNIDAD PLURINACIONAL PACHAKUTIK',
        lista: '18',
        urlLogo: 'lista18.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10, 
        detalle: 'UNIÓN ECUATORIANA',
        lista: '19',
        urlLogo: 'lista19.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11, 
        detalle: 'MOVIMIENTO DEMOCRACIA SÍ',
        lista: '20',
        urlLogo: 'lista20.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12, 
        detalle: 'ALIANZA CREO PSC',
        lista: '21-6',
        urlLogo: 'lista21-6.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13, 
        detalle: 'PARTIDO POLÍTICO SOCIEDAD UNIDA MÁS ACCIÓN',
        lista: '23',
        urlLogo: 'lista23.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14, 
        detalle: 'MOVIMIENTO CONSTRUYE',
        lista: '25',
        urlLogo: 'lista25.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15, 
        detalle: 'MOVIMIENTO NACIONAL PODEMOS',
        lista: '33',
        urlLogo: 'lista33.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16, 
        detalle: 'MOVIMIENTO ALIANZA PAÍS',
        lista: '35',
        urlLogo: 'lista35.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17, 
        detalle: 'PARTIDO UNIDAD POPULAR',
        lista: '2',
        urlLogo: 'lista2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18, 
        detalle: 'PARTIDO SOCIAL CRISTIANO',
        lista: '6',
        urlLogo: 'lista6.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19, 
        detalle: 'MOVIMIENTO CREO',
        lista: '21',
        urlLogo: 'lista21.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20, 
        detalle: 'PARTIDO SOCIALISTA ECUATORIANO',
        lista: '17',
        urlLogo: 'lista17.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21, 
        detalle: 'MINKA POR LA VIDA',
        lista: '18-2',
        urlLogo: 'lista18-2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22, 
        detalle: 'MOVIMIENTO CONCERTACIÓN',
        lista: '51',
        urlLogo: 'lista51.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23, 
        detalle: 'AZUAY PRIMERO',
        lista: '82-62',
        urlLogo: 'lista82-62.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
 },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Partidos', null, {});
  }
};
