// import { replaceStringInFilesSync } from 'tiny-replace-files';

// const queryoptionStart = replaceStringInFilesSync({
//   files: './src/generated/**/**.ts',
//   from: /(options\?\:\s*Omit<UseQueryOptions)/g,
//   to: 'options?: Prettyfy<Omit<UseQueryOptions',
// });
// replaceStringInFilesSync({
//   files: './src/generated/**/**.ts',
//   from: /options: Omit<UseInfiniteQueryOptions/g,
//   to: 'options: Prettyfy<Omit<UseInfiniteQueryOptions',
// });

// const queryoptionEnd = replaceStringInFilesSync({
//   files: './src/generated/**/**.ts',
//   from: /, TError, TData\>\[\'queryKey\'\] \}/g,
//   to: ", TError, TData>['queryKey'] }>,\tclient?: QueryClient",
// });

// replaceStringInFilesSync({
//   files: './src/generated/**/**.ts',
//   from: /\} from '@tanstack\/react-query'/g,
//   to: ", QueryClient } from '@tanstack/react-query'",
// });
// replaceStringInFilesSync({
//   files: './src/generated/**/**.ts',
//   from: /variables\)\s*,\s*\.{3}options\s*\}/g,
//   to: 'variables), ...options},client',
// });

// console.info(
//   Array.isArray(queryoptionStart) && Array.isArray(queryoptionEnd)
//     ? [...queryoptionStart, ...queryoptionEnd].filter((e) => e.changed)
//     : [],
// );
