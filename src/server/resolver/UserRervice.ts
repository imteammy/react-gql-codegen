import {
    Arg,
    Args,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
} from 'type-graphql';

@ObjectType()
class User {
    @Field()
    id!: string;
}

@Resolver(User)
export class UserResolver {
    @Query((returns) => User)
    async getUsersByID(@Arg('id', () => String) id: string): Promise<User> {
        return { id };
    }
    @Query((returns) => [User])
    async users(): Promise<User[]> {
        return [{ id: '1' }, { id: '2' }];
    }
    @Mutation((returns) => User)
    async createUser(): Promise<User> {
        return { id: Math.random().toString().slice(3) };
    }
}
