const request = require('supertest')
const app = require('../server')

// TESTING SINGUP ENDPOINT
describe("POST /api/users/signup", () => {
    it("responds with 201 created", (done) => {
      const data = {
        username: "juan_test",
        password: "jt123456",
        email: "j_tester@gmail.com",
        name: "juan tester",
        phone: "2964-123456"
      }
      request(app)
        .post("/api/users/signup")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
  
    it("responds with 409 on duplicate entry", (done) => {
      const data = {
        username:"admin",
        password:"admin+4321",
        email: "admin@gmail.com",
        name: "admi nistrador",
        phone: "2964-345678"
      }
      request(app)
        .post("/api/users/signup")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(409)
        .end((err) => {
          if (err) return done(err);
          done()
        })
    })

    it("responds with 400 on User model validation - bad request", (done) => {
        const data = {
          username:"sole1988",
          password:"12",
          email: "sol88hmail.com",
          name: "soledad campana",
          phone: "2964-987654"
        }
        request(app)
          .post("/api/users/signup")
          .send(data)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(400)
          .end((err) => {
            if (err) return done(err)
            done()
          })
      })

})