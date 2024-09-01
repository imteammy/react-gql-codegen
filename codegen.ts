// import { CodegenConfig } from '@graphql-codegen/cli';

type Fecther =
    | 'fetch'
    | 'graphql-request'
    | {
          endpoint: string;
          fetchParams?: RequestInit;
      };
const BASE = 'http://localhost:5555';
// const config: CodegenConfig = {
//     overwrite: true,
//     schema: BASE,
//     documents: "./src/gql-gen/sql/generated/**/*.gql",
//     generates: {
//         './src/gql-gen/gql/generated/base.tsx': {
//             plugins: [
//                 {
//                     add: {
//                         content: `
// // @ts-nocheck \t
// export type Prettyfy<T> = { [K in keyof T] : T[K] } & {}
// `,
//                     },
//                 },
//                 'typescript',
//                 'typescript-operations',
//                 'typescript-react-query',
//                 // "typescript-react-apollo",
//             ],
//             config: {
//                 exposeDocument: true,
//                 exposeQueryKeys: true,
//                 exposeMutationKeys: true,
//                 exposeFetcher: true,
//                 addInfiniteQuery: true,
//                 withHooks: true,
//                 nonOptionalTypename: true, //  __typename
//                 skipTypename: false, // set `true` to remove __typename
//                 strictScalars: true,
//                 reactQueryVersion: 5,
//                 fetcher: { endpoint: BASE } satisfies Fecther,
//                 scalars: {
//                     DateTime: 'Date | string',
//                     DateTimeISO: 'Date | string',
//                     JSON: '{ [key: string | number]: any }',
//                 },
//             },
//         },
//         // 'src/gql-gen/generated/upload_service.ts': {
//         //     documents: "./src/gql-gen/generated/**/*.gql",
//         //     plugins: [
//         //         "typescript",
//         //         "typescript-operations",
//         //         "typescript-react-query",
//         //         // "typescript-react-apollo",
//         //         {
//         //             add: {
//         //                 content: '// @ts-nocheck',
//         //             },
//         //         },
//         //     ],
//         //     config: {
//         //         exposeDocument: true,
//         //         exposeQueryKeys: true,
//         //         exposeMutationKeys: true,
//         //         exposeFetcher: true,
//         //         addInfiniteQuery: true,
//         //         withHooks: true,
//         //         nonOptionalTypename: true, //  __typename
//         //         skipTypename: false, // set `true` to remove __typename
//         //         strictScalars: true,
//         //         reactQueryVersion: 5,
//         //         fetcher: { endpoint: BASE } satisfies Fecther,
//         //         scalars: {
//         //             DateTime: 'Date | string',
//         //             DateTimeISO: 'Date | string',
//         //             JSON: '{ [key: string | number]: any }',
//         //         }
//         //     },
//         // },
//     },
// };

// export default config;

import { CodegenConfig } from '@graphql-codegen/cli';
import { join } from 'path';
const config: CodegenConfig = {
    schema: BASE,
    documents: join(
        __dirname,
        'src',
        'web',
        'src',
        'shared',
        'gqlgen',
        'generated',
        '/**/*.gql',
    ),
    generates: {
        './src/web/src/shared/gqlgen/generated/base.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-query',
                // 'typescript-react-apollo',
                {
                    add: {
                        content: `// @ts-nocheck \t
                            export type Prettyfy<T> = { [K in keyof T] : T[K] } & {}`,
                    },
                },
            ],
            config: {
                exposeDocument: true,
                exposeQueryKeys: true,
                exposeMutationKeys: true,
                exposeFetcher: true,
                // addInfiniteQuery: true,
                withHooks: true,
                nonOptionalTypename: true, //  __typename
                skipTypename: false, // set `true` to remove __typename
                strictScalars: true,
                reactQueryVersion: 5,
                fetcher: {
                    endpoint: BASE,
                    fetchParams: {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                } satisfies Fecther,
                scalars: {
                    DateTime: 'Date | string',
                    DateTimeISO: 'Date | string',
                    JSON: '{ [key: string | number]: any }',
                },
            },
        },
    },
};

export default config;
