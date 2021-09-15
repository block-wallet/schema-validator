import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';
import standaloneCode from 'ajv/dist/standalone';
import { typedMessageSchema } from './schema/typedMessage';

const ajv = new Ajv({ code: { source: true } }); // this option is required to generate standalone code

// 1. Generate module with a single default export (CommonJS and ESM compatible):
const validate = ajv.compile(typedMessageSchema);
let moduleCode = standaloneCode(ajv, validate);

// 2. Write module code to file
fs.writeFileSync(
    path.join(__dirname, '../dist/schemaValidator.js'),
    moduleCode,
);
