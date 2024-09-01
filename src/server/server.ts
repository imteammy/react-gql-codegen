import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolver/UserRervice';

async function start() {
    const schema = await buildSchema({
        resolvers: [UserResolver],
    });
    const server = new ApolloServer({ schema });
    server.listen(5555).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}
start();
// The `listen` method launches a web server
