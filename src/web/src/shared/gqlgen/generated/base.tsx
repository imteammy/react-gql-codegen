// @ts-nocheck
export type Prettyfy<T> = { [K in keyof T]: T[K] } & {};
import {
    useMutation,
    useQuery,
    UseMutationOptions,
    UseQueryOptions,
    QueryClient,
} from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
    return async (): Promise<TData> => {
        const res = await fetch('http://localhost:5555', {
            method: 'POST',
            ...{ headers: { 'Content-Type': 'application/json' } },
            body: JSON.stringify({ query, variables }),
        });

        const json = await res.json();

        if (json.errors) {
            const { message } = json.errors[0];

            throw new Error(message);
        }

        return json.data;
    };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type Mutation = {
    __typename: 'Mutation';
    createUser: User;
};

export type Query = {
    __typename: 'Query';
    getUsersByID: User;
    users: Array<User>;
};

export type QueryGetUsersByIdArgs = {
    id: Scalars['String']['input'];
};

export type User = {
    __typename: 'User';
    id: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{ [key: string]: never }>;

export type CreateUserMutation = {
    __typename: 'Mutation';
    createUser: { __typename: 'User'; id: string };
};

export type GetUsersByIdQueryVariables = Exact<{
    id: Scalars['String']['input'];
}>;

export type GetUsersByIdQuery = {
    __typename: 'Query';
    getUsersByID: { __typename: 'User'; id: string };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
    __typename: 'Query';
    users: Array<{ __typename: 'User'; id: string }>;
};

export const CreateUserDocument = `
    mutation createUser {
  createUser {
    id
  }
}
    `;

export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        CreateUserMutation,
        TError,
        CreateUserMutationVariables,
        TContext
    >,
) => {
    return useMutation<
        CreateUserMutation,
        TError,
        CreateUserMutationVariables,
        TContext
    >({
        mutationKey: ['createUser'],
        mutationFn: (variables?: CreateUserMutationVariables) =>
            fetcher<CreateUserMutation, CreateUserMutationVariables>(
                CreateUserDocument,
                variables,
            )(),
        ...options,
    });
};

useCreateUserMutation.getKey = () => ['createUser'];

useCreateUserMutation.fetcher = (variables?: CreateUserMutationVariables) =>
    fetcher<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables,
    );

export const GetUsersByIdDocument = `
    query getUsersByID($id: String!) {
  getUsersByID(id: $id) {
    id
  }
}
    `;

export const useGetUsersByIdQuery = <
    TData = GetUsersByIdQuery,
    TError = unknown,
>(
    variables: GetUsersByIdQueryVariables,
    options?: Prettyfy<
        Omit<UseQueryOptions<GetUsersByIdQuery, TError, TData>, 'queryKey'> & {
            queryKey?: UseQueryOptions<
                GetUsersByIdQuery,
                TError,
                TData
            >['queryKey'];
        }
    >,
    client?: QueryClient,
) => {
    return useQuery<GetUsersByIdQuery, TError, TData>(
        {
            queryKey: ['getUsersByID', variables],
            queryFn: fetcher<GetUsersByIdQuery, GetUsersByIdQueryVariables>(
                GetUsersByIdDocument,
                variables,
            ),
            ...options,
        },
        client,
    );
};

useGetUsersByIdQuery.document = GetUsersByIdDocument;

useGetUsersByIdQuery.getKey = (variables: GetUsersByIdQueryVariables) => [
    'getUsersByID',
    variables,
];

useGetUsersByIdQuery.fetcher = (variables: GetUsersByIdQueryVariables) =>
    fetcher<GetUsersByIdQuery, GetUsersByIdQueryVariables>(
        GetUsersByIdDocument,
        variables,
    );

export const UsersDocument = `
    query users {
  users {
    id
  }
}
    `;

export const useUsersQuery = <TData = UsersQuery, TError = unknown>(
    variables?: UsersQueryVariables,
    options?: Prettyfy<
        Omit<UseQueryOptions<UsersQuery, TError, TData>, 'queryKey'> & {
            queryKey?: UseQueryOptions<UsersQuery, TError, TData>['queryKey'];
        }
    >,
    client?: QueryClient,
) => {
    return useQuery<UsersQuery, TError, TData>(
        {
            queryKey:
                variables === undefined ? ['users'] : ['users', variables],
            queryFn: fetcher<UsersQuery, UsersQueryVariables>(
                UsersDocument,
                variables,
            ),
            ...options,
        },
        client,
    );
};

useUsersQuery.document = UsersDocument;

useUsersQuery.getKey = (variables?: UsersQueryVariables) =>
    variables === undefined ? ['users'] : ['users', variables];

useUsersQuery.fetcher = (variables?: UsersQueryVariables) =>
    fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables);
