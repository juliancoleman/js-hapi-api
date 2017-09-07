# JS Hapi API

[![Build Status](https://semaphoreci.com/api/v1/juliancoleman/js-hapi-api/branches/master/badge.svg)](https://semaphoreci.com/juliancoleman/js-hapi-api)

The `js-hapi-api` is the most standardized Hapi API to date. While this repo is a bit young, this project and all its efforts are well over two years old, based on an old concept by [@jadengore](https://github.com/jadengore) for an old project for a public curation of recipes (without the typical suck of your average ad-filled application).

## How is this the most _standardized_ Hapi API to date?

I'm glad you asked. First of all, I can't begin to describe how this one API has changed the game for me in the tech industry. Not only does the code adopt the most recent features of [Node 8.2.1](https://nodejs.org), but everything I know about API structure, routing, `stateless tokens`, writing and running unit tests, setting up `Continuous Integration (CI)`, and a plethora of other learning expieriences that just looking at the code, I know _you_, the reader, could appreciate, I've learned from building this API alone. There is just far too much to learn from this API that could make you invaluable to the company God made no mistake in placing you in. Second of all, the amount of tests I've written to make sure this product is what it says it is, is downright ridiculous. I've tested every endpoint, every endpoint controller, and every endpoint's service and validator. This goes to show one thing and one thing only.

#### I don't settle for crap code.

> __*"Sugar packet? That’s what’s wrong with this country Eric. Nobody wants to roll up their sleeves and work. They’re all looking for their sugar packet solution. Well, not me. I’m getting a saw!"*__ -- _Red Forman (That 70's Show)_

I pride myself as a well-rounded software engineer, with most of my experience being in JavaScript (Node and web), and Python. I've worked in plenty-a-companies that failed to do the most important things, such as: using a _damn_ linter, having a _damn_ company-wide set of standards, setting _damn_ expectations on their employees and engineers, and practicing what they _gaht-damn_ preach. Not only this, but I often found myself asking the question: __*do I even actually work here?*__ And while my project managers were either never present, or had even been able to identify what _good code_ looks like, it just placed a big strain on my heart. The tech industry has to change, especially in California. I'm sick of people looking for their "sugar packet solutions". [@jadengore](https://github.com/jadengore) and I would call that `immoral software`.

## Your point?

Well, now that I've just explained the birth of the universe in this README, the point I'm trying to make is that my heart is to encourage engineers. The key to being a good engineer is to teach 10 other engineers to be twice as good at their jobs. I believe I can accomplish it with this API. This API is two years of research and learning, no brakes used (queue Donald Trump Pepe meme). To help you get started, I've provided an extensive list of docs that you'll want to read should you decide to use this API. It is guaranteed to work out of the box (`.env` batteries not included). The proof is in that gorgeous `Semaphore CI` badge at the top of the README.

# Setup

#### yarn

I use the [yarn package manager](https://yarnpkg.com/). You can download it in the link provided if need be. Otherwise, just `cd` into where you've cloned this repo and run `yarn` from your favorite Terminal emulator.

#### .env

Your `.env` file needs the following content

```sh
DATABASE_POSTGRESQL_USERNAME=your_database_username # change if not using Postgres
DATABASE_POSTGRESQL_PASSWORD=your_database_password # change if not using Postgres
DATABASE_NAME=your_database_name
DATABASE_HOST=your_database_host # typically 127.0.0.1
JWT_KEY=your_jwt_secret_key
```

#### PostgreSQL

For this API, I've gone with PostgreSQL, but you can use any SQL database interchangeably. Just be sure to add your DB with `yarn`, change the identifier in `config/Knexfile.js`, and change the `POSTGRESQL` to your database flavour as mentioned above in the `.env` section.

To download ProstgreSQL on MacOS, use [Homebrew](https://brew.sh), don't bother using Windows, and for Linux (Debian, or Ubuntu), I personally recommend downloading from the [PostgreSQL Github Repository](https://github.com/postgres/postgres). Follow the instructions on how to build it. If you're ever unsure on how to do this, "seek first His Kingdom" and then ask someone. What I mean by this is really consider what it means to be an engineer.

From here, I would recommend following the instructions from [DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04) on how to set up Postgres.

#### Knex

Now that your `.env` and PostgreSQL client have been set up, hop into Terminal and run the following

```sh
yarn knex migrate:latest
```

#### Back to the .env

Just make sure your `.env` file reflects your Postgres setup.

#### Docs

All the docs for the present functionality are contained within the `docs/` directory, which can be found at project root. I would recommend reading up on these to get an idea on _how to interact with the API, and example payloads_.

## Testing

As you've noticed above, I use Semaphore CI. If the badge ever says `fail`, chances are I'm working on it that second. But if you'd like to run it locally, chances are you've run `yarn` from the Terminal.

You can run the testing suite by running

```sh
yarn test
```

If any of the tests should fail, please make sure your `.env` and database are set up properly.

# Important Docs

[HapiJS](https://hapijs.com/api) - A rich framework for building applications and services

[hapi-auth-jwt2](https://github.com/dwyl/hapi-auth-jwt2) - Secure Hapi.js authentication plugin using JSON Web Tokens (JWT) in Headers, Query or Cookies

[Joi](https://github.com/hapijs/joi/blob/v10.6.0/API.md) - Object schema description language and validator for JavaScript objects

[BookshelfJS](http://bookshelfjs.org/) - Bookshelf is a JavaScript ORM for Node.js, built on the Knex SQL query builder

[bookshelf-bcrypt](https://github.com/estate/bookshelf-bcrypt) - Automatic password hashing for your bookshelf models

[bookshelf-json-columns](https://github.com/seegno/bookshelf-json-columns)* - Parse JSON columns with Bookshelf.js

[bookshelf-paranoia](https://github.com/estate/bookshelf-paranoia) - A bookshelf plugin to soft-delete data

[KnexJS](http://knexjs.org/) - Knex.js is a "batteries included" SQL query builder for __Postgres__, __MSSQL__, __MySQL__, __MariaDB__, __SQLite3__, and __Oracle__

[Bluebird](http://bluebirdjs.com/docs/api-reference.html) - Bluebird is a fully featured promise library with focus on innovative features and performance

[jsonwebtokens](https://github.com/dwyl/learn-json-web-tokens) - JWTs are an open, industry standard RFC 7519 method for representing claims securely between two parties

[Ramda](http://ramdajs.com/docs/) - A practical functional library for JavaScript programmers

[Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser

[Chai](http://chaijs.com/) - Chai is a BDD / TDD assertion library for node and the browser

[Nodemon](https://github.com/remy/nodemon) - Monitor for any changes in your node.js application and automatically restart the server

###### * not included, but available if required

# Final comments

Now that wasn't too bad of a read, was it? By now, you're probably wondering how the heck to actually use this API as boilerplate code. From here, I'll go ahead and point you to the `docs/` directory (folder). The JS Hapi API was designed to have an incredibly simple setup. Extending the application is a courageous endeavor. Godspeed, homie.
