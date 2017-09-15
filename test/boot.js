process.env.NODE_ENV = "test";

require("apprequire")(`${__dirname}/..`);
require("co-mocha");

const chai = require("chai");
const chaiSubset = require("chai-subset");
const knexCleaner = require("knex-cleaner");

const Bookshelf = appRequire("config/bookshelf");

chai.use(chaiSubset);

global.expect = chai.expect;

before(async () => {
  global.testApp = await require("../server");
});


afterEach((done) => {
  knexCleaner
    .clean(Bookshelf.knex, { mode: "delete" })
    .then(() => done());
});
