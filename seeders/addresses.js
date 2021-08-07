module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Addresses', 
      [{
            street: "Corben",
            number: 1010,
            user_id: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Red Cloud",
            number: 2069,
            user_id: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Elmside",
            number: 758,
            user_id: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Bellgrove",
            number: 4087,
            user_id: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Scott",
            number: 996,
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Marcy",
            number: 3010,
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Farwell",
            number: 2009,
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Ilene",
            number: 988,
            user_id: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Knutson",
            number: 520,
            user_id: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Starling",
            number: 5845,
            user_id: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Moulton",
            number: 477,
            user_id: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Logan",
            number: 568,
            user_id: 16,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Clemons",
            number: 7466,
            user_id: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Gina",
            number: 9109,
            user_id: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Fuller",
            number: 23,
            user_id: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Hoard",
            number: 8677,
            user_id: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Oxford",
            number: 1077,
            user_id: 18,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Knutson",
            number: 9265,
            user_id: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Hayes",
            number: 1419,
            user_id: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Burning Wood",
            number: 7288,
            user_id: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Bluestem",
            number: 884,
            user_id: 20,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "School",
            number: 26,
            user_id: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Independence",
            number: 780,
            user_id: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Lunder",
            number: 213,
            user_id: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Hanson",
            number: 844,
            user_id: 19,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Dennis",
            number: 73,
            user_id: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Crescent Oaks",
            number: 1112,
            user_id: 17,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Tomscot",
            number: 7468,
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Milwaukee",
            number: 9835,
            user_id: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Anhalt",
            number: 7658,
            user_id: 21,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Ohio",
            number: 976,
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            street: "Delaware",
            number: 177,
            user_id: 16,
            createdAt: new Date(),
            updatedAt: new Date()
      }])
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Addresses', null, {});
    }
};