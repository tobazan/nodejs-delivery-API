module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', 
      [{
            username: "admin",
            password: "admin+4321",
            email: "matye_bazan@hotmail.com",
            name: "Only Admin",
            phone: "+54-2964-422393",
            isAdmin: true,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "creignolds1",
            password: "EKxBEcTFa2",
            email: "creignolds1@google.com.br",
            name: "Cathleen Reignolds",
            phone: "+27-525-979-7659",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "oteulier2",
            password: "xPRvS4fkA4",
            email: "oteulier2@baidu.com",
            name: "Orelie Teulier",
            phone: "+256-362-551-2575",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "smorman3",
            password: "BDxcsee2uZ",
            email: "smorman3@sfgate.com",
            name: "Shayne Morman",
            phone: "+7-700-742-7601",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "aedwardes4",
            password: "G0cE0U",
            email: "aedwardes4@pinterest.com",
            name: "Amalita Edwardes",
            phone: "+48-723-447-0710",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "ktrim5",
            password: "3Q281pXhOq",
            email: "ktrim5@wordpress.com",
            name: "King Trim",
            phone: "+54-244-998-0050",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "kdorcey6",
            password: "FAsQg5K2",
            email: "kdorcey6@home.pl",
            name: "Kerwinn Dorcey",
            phone: "+86-844-230-0043",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "dreen7",
            password: "aKiRyRh",
            email: "dreen7@nationalgeographic.com",
            name: "Doris Reen",
            phone: "+62-463-827-0972",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "ebothen8",
            password: "ckfHcabF",
            email: "ebothen8@php.net",
            name: "Emmit Bothen",
            phone: "+237-972-120-4923",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: "lkeane9",
            password: "L3GNCjOO0w",
            email: "lkeane9@zdnet.com",
            name: "Lanie Keane",
            phone: "+81-818-449-6987",
            isAdmin: false,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    }
  };