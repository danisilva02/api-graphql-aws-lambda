graphql-ts-express-gulp-boilerplate
A GraphQL Server boilerplate made with Typescript, gulp

Installation
Clone project
git clone https://github.com/benawad/graphql-ts-server-boilerplate.git
cd into folder
cd graphql-ts-server-boilerplate
Download dependencies
yarn
Start PostgreSQL server
Create database called graphql-ts-server-boilerplate
createdb graphql-ts-server-boilerplate
Add a user with the username postgres and and no password. (You can change what these values are in the ormconfig.json)

Install and start Redis

Usage
You can start the server with yarn start then navigate to http://localhost:4000 to use GraphQL Playground.

Features
Register - Send confirmation email
Login
Forgot Password
Logout
Cookies
Authentication middleware
Rate limiting
Locking accounts
Testing (probably Jest)
Watch how it was made
Playlist: https://www.youtube.com/playlist?list=PLN3n1USn4xlky9uj6wOhfsPez7KZOqm2V