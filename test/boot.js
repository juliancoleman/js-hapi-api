process.env.NODE_ENV = "test";

require("apprequire")(`${__dirname}/..`);
require("co-mocha");

const chai = require("chai");
const chaiSubset = require("chai-subset");
const knexCleaner = require("knex-cleaner");

const { Model } = appRequire("config/objection");
const knex = Model.knex();

chai.use(chaiSubset);

global.expect = chai.expect;

before(async () => {
  global.testApp = await require("../server");
});

afterEach((done) => {
  knexCleaner
    .clean(knex, { mode: "delete" })
    .then(() => done());
});
