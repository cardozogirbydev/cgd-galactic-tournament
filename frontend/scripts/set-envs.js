const { writeFileSync, mkdirSync } = require ('fs');
require('dotenv').config();

const directoryPath = './src/environments';
const targetPath = `${directoryPath}/environment.ts`;
const targetPathDevelopment = `${directoryPath}/environment.development.ts`;
const apiUrl = process.env['API_URL'];

if(!apiUrl) throw new Error('API_URL no se ha definido en el archivo .env');

const envFileContent = `
export const environment = {
    apiUrl: '${apiUrl}'
};
`;

mkdirSync(directoryPath, { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDevelopment, envFileContent);