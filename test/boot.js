require("apprequire")(`${__dirname}/..`);
process.env.NODE_ENV = "test";

require("co-mocha");
const chai = require("chai");
const chaiSubset = require("chai-subset");
const knexCleaner = require("knex-cleaner");

chai.use(chaiSubset);

global.expect = chai.expect;

before(async () => {
  global.testApp = await require("../server");
});

const Bookshelf = require("../config/bookshelf");

afterEach((done) => {
  knexCleaner
    .clean(Bookshelf.knex, { mode: "delete" })
    .then(() => done());
});
