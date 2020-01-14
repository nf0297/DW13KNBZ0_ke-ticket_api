'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: "Freya Allan",
        phone: "0812341",
        dob: "2001-09-06",
        email: "freya@freya.com",
        username: "freya",
        password: "freya",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFRUVFRUVFRUVEBUPFxUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysdHx0rLS0rLSsrLS0rLS0tLS0tKy0tLS0rLS0tLS0tLS0tLSsrLSstLS0tNy0tNzQtKy03Lf/AABEIAOMA3gMBIgACEQEDEQH/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Aimer",
        phone: "0812342",
        dob: "1990-07-09",
        email: "aimer@aimer.com",
        username: "aimer",
        password: "aimer",
        image: "https://cdnx.natalie.mu/media/pp/static/music/aimer15/photo04.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lee Ji-eun",
        phone: "0812343",
        dob: "1993-05-16",
        email: "iu@iu.com",
        username: "iu",
        password: "iu",
        image: "https://asset.kompas.com/crops/bw0QAj68dglRsBgxXbWXflA79TM=/82x0:886x536/750x500/data/photo/2018/05/08/1328492635.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
