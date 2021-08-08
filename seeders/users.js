module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', 
      [{
            username: "admin",
            password: "$2a$08$NqZwk6HntWviO4vwB4VkL.VwXnaBtW4n0cG3IreKTXyvF/yVSqpXq",
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
            password: "$2a$08$y2Ti0hlnQAkCG7nSJdbrHupE3nkQfQlSW.n0zvpqGQTeIDxTPfGNW",
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
            password: "$2a$08$5minoLnNKPV6CKWQglhJOuJUluHCT38/XMYLBKTOHH/UylGXNRzMy",
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
            password: "$2a$08$y3TzBiProescvPRuk3saPeaGwwBy0JXq.1bs5MfwYxgTZebVZtsIa",
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
            password: "$2a$08$RXTbXVqggwsYTxLQIj/pp.4BW1PSY6CIOhSf89rmDDKnLLgrxp.Ky",
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
            password: "$2a$08$9nBxOBRr8cVS/TiSAgnA9.at0OaqsceSruQFvAIWGI/GGf2/J4oEC",
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
            password: "$2a$08$nvzeuCTaOoteottK2qUPUOKRQMR/nj71CRA2d3egC2DD19v1Oy8gO",
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
            password: "$2a$08$MBBsLCyeNK8j9NUB2SGwxezmBU6hht45GILxr/ebA0LVZcjiIPyI.",
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
            password: "$2a$08$PCez/Rstdu/tX.zpa27qRuhsktDrVfEojZJLjSFUagIdWWhB3hXqq",
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
            password: "$2a$08$o4k9F7BNd9tQIS.Jtq0AW.jATDMv7YUVD2WPYJtGkYGgEVganObNW",
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