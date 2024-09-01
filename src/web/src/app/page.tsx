'use client';
import {
    useUsersQuery,
    useGetUsersByIdQuery,
    useCreateUserMutation,
} from '@/shared/gqlgen/generated/base';
import { useQueryClient } from '@tanstack/react-query';
export default function Home() {
    const client = useQueryClient();
    const { data } = useUsersQuery(undefined, { queryKey: ['user'] });
    const { mutateAsync, data: userCreate } = useCreateUserMutation({
        mutationKey: ['createUser'],
    });

    const { data: userId } = useGetUsersByIdQuery({
        id: userCreate?.createUser.id ?? '1',
    });
    return (
        <main>
            <div>Hello world!</div>
            {data?.users.length ?? 0}
            <div>
                <pre>{JSON.stringify(userId, null, 4)}</pre>
            </div>
            <div>
                <pre>{JSON.stringify(userId, null, 4)}</pre>
            </div>
            <div>
                <div>User create</div>
                <pre>{JSON.stringify(userCreate, null, 4)}</pre>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        mutateAsync({}).then((v) => {
                            console.log(v);
                        });
                    }}
                >
                    Create
                </button>
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        client.invalidateQueries({
                            // queryKey: ['user'],
                            predicate({ queryKey }) {
                                const [f] = queryKey;
                                return f === 'user' || f === 'getUsersByID';
                            },
                        });
                    }}
                >
                    invalidateQueries
                </button>
                <button
                    type="button"
                    onClick={() => {
                        client.resetQueries({
                            predicate({ queryKey }) {
                                const [f] = queryKey;
                                return (
                                    f === 'user' ||
                                    f === 'getUsersByID' ||
                                    f === 'createUser'
                                );
                            },
                        });
                    }}
                >
                    remove
                </button>
            </div>
        </main>
    );
}
