import reader from '../reader.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const expectResult = '{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
console.log(getFixturePath('file1.json'), typeof getFixturePath('file1.json'));

test('first jest test', () => {
  expect(reader(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(expectResult);
});
