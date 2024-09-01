import { replaceStringInFilesSync } from 'tiny-replace-files';

const result = replaceStringInFilesSync({
    // ลบ Fragment () เปล่า เนื่องจากตัว gen-gql ไม่ support
    files: './src/web/src/shared/gqlgen/generated/**/**.gql',
    from: /\(\)/g,
    to: ' ',
    countMatches: true,
    // freeze: true,
});

console.info(Array.isArray(result) ? result.filter((e) => e.changed) : result);
