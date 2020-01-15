'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
    {
      title:"The International 2019",
      category_id:4,
      starttime:"2020-01-15 10:00",
      endtime:"2020-01-15 10:00",
      price:"500000",
      desc:"The International 2019 will take places in China with $30 Million Prize-pool",
      address:"Guangzhou, China",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      image:"https://cms.dailysocial.id/wp-content/uploads/2019/07/c3a1f017b195ac17dba52facb685f09a_featuredxxcr.jpg",
      user_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"One Ok Rock Concert - Eye of the Storm",
      category_id:2,
      starttime:"2020-01-16 10:00",
      endtime:"2020-01-16 10:00",
      price:"500000",
      desc:"One Ok Rock concert will takes place in Istora Senayan Stadium, Jakarta Selatan",
      address:"Tanah Abang, Jakarta Selatan",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      image:"https://cdn2.tstatic.net/tribunnews/foto/bank/images/poster-eye-of-the-storm-tour-2020-indonesia.jpg",
      user_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Baby Metal Concert 2020",
      category_id:2,
      starttime:"2020-01-16 10:00",
      endtime:"2020-01-16 10:00",
      price:"600000",
      desc:"Baby Metal concert will takes place in Istora Senayan Stadium, Jakarta Selatan",
      address:"Tanah Abang, Jakarta Selatan",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      image:"https://mediaformasi.com/wp-content/uploads/2019/11/BABYMETAL-jakarta.jpg",
      user_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Go-Green Summit & Awareness",
      category_id:3,
      starttime:"2020-01-15 20:00",
      endtime:"2020-01-15 20:00",
      price:"250000",
      desc:"Go-Green Summit & Awareness on Climate Change in Bali, Indonesia.",
      address:"Bali, Indonesia",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      user_id:1,
      image:"https://allconferencealert.net/top_banner/conference-in-indonesia-2020.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Indonesia Science Conference 2020",
      category_id:3,
      starttime:"2020-01-15 10:00",
      endtime:"2020-01-15 10:00",
      price:"250000",
      desc:"Asia Pacific Conference on Nursing Science and Healthcare live in Bali, Indonesia",
      address:"Bali, Indonesia",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      user_id:3,
      image:"https://allconferencealert.net/top_banner/indonesia-conference-2020.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"2020 Yonex All England Badminton",
      category_id:1,
      starttime:"2020-01-16 20:00",
      endtime:"2020-01-16 20:00",
      price:"450000",
      desc:"Yonex All England Open Badminton Match 2020",
      address:"London, UK",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      user_id:2,
      image:"https://pbs.twimg.com/media/Dew92TKW4AEMotM.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"League of Legends Worlds 2020",
      category_id:4,
      starttime:"2020-01-17 12:00",
      endtime:"2020-01-17 12:00",
      price:"500000",
      desc:"League of Legends Worlds Championship 2020",
      address:"Shanghai, China",
      urlmap:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3328135909114!2d106.80563171349121!3d-6.2197696758714045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f2d1c6db9fe661f!2sIstora%20Stadium!5e0!3m2!1sen!2sid!4v1579077472888!5m2!1sen!2sid",
      user_id:2,
      image:"https://www.esportznetwork.com/wp-content/uploads/2019/11/LoL-Worlds-2020-Announcement.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
