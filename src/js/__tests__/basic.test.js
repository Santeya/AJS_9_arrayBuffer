import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../arrayBufferConverter';

test('convert loaded puffer input into a string ', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
