export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let newData = '';
    const bufferView = new Uint16Array(this.buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      newData += String.fromCharCode(bufferView[i]);
    }
    return newData;
  }
}
