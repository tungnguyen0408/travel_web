const express = require("express");

let getHomePage = async (req, res) => {
  return res.render("homePage.ejs");
};

let getLogin = async (req, res) => {
  return res.render("login.ejs");
};
let getSignUp = async (req, res) => {
  return res.render("signUp.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getLogin: getLogin,
  getSignUp: getSignUp,
};
