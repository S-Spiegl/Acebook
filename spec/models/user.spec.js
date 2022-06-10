const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a name", () => {
    const user = new User({
      name: "Kepa Arrizabalaga",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.name).toEqual("Kepa Arrizabalaga");
  });

  it("has an email address", () => {
    const user = new User({
      name: "Kepa Arrizabalaga",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      name: "Kepa Arrizabalaga",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      name: "Kepa Arrizabalaga",
      email: "someone@example.com",
      password: "password",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          name: "Kepa Arrizabalaga",
          email: "someone@example.com",
          password: "password",
        });
        done();
      });
    });
  });

  // it("bcrypt is used on the password for the user", (done) => {
  //   const user = new User({
  //     name: "Kepa Arrizabalaga",
  //     email: "someone@example.com",
  //     password: "password",
  //   });

  //   user.save((err) => {
  //     expect(err).toBeNull();

  //     User.find((err, users) => {
  //       expect(err).toBeNull();

  //       expect(users[0]).toMatchObject({
  //         name: "Kepa Arrizabalaga",
  //         email: "someone@example.com",
  //         password: "$2a$10$rT6ngdmS26utdW35aw/hbuKAl5AuT1w9HrDi1QX/L69/dbhO3AxA.",
  //       });
  //       done();
  //     });
  //   });
  // })
});
