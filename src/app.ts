import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

class App{

    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/', 
            expressGraphQL( () => {
                return {
                    graphiql: true,
                    schema
                }
            })
        )
    }
}

module.exports = new App().express;