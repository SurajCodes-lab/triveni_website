// Evaluate repository data and JSX with the compiler already installed by Next.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const { transformSync } = require('next/dist/build/swc');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(file) {
  let absolute = path.resolve(root, file);
  if (!fs.existsSync(absolute)) absolute = ['.js','.jsx','.mjs','/index.js'].map(e=>absolute+e).find(fs.existsSync);
  if (!absolute) throw new Error(`Missing module ${file}`);
  if (absolute.endsWith('.json')) return JSON.parse(fs.readFileSync(absolute,'utf8'));
  if (cache.has(absolute)) return cache.get(absolute).exports;
  const module = {exports:{}};
  cache.set(absolute,module);
  const realRequire = createRequire(absolute);
  const localRequire = name => name.startsWith('@/') ? load('src/'+name.slice(2)) : name.startsWith('.') ? load(path.resolve(path.dirname(absolute),name)) : realRequire(name);
  const code = transformSync(fs.readFileSync(absolute,'utf8'), {filename:absolute,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}}).code;
  vm.runInThisContext(`(function(require,module,exports,__filename,__dirname){${code}\n})`,{filename:absolute})(localRequire,module,module.exports,absolute,path.dirname(absolute));
  return module.exports;
}
module.exports = {load};
