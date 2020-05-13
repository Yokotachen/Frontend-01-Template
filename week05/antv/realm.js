var set = new Set()

var globalProperties = [
  'eval',
  'isFinite',
  'isNaN',
  'parseFloat',
  'parseInt',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'Array',
  'Date',
  'RegExp',
  'Promise',
  'Proxy',
  'Map',
  'WeakMap',
  'Set',
  'WeakSet',
  'Function',
  'Boolean',
  'String',
  'Number',
  'Symbol',
  'Object',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint16Array',
  'Uint32Array',
  'Uint8ClampedArray',
  'Atomics',
  'JSON',
  'Math',
  'Reflect',
]

var queue = []
globalProperties.forEach((o) => queue.push({ path: o, object: this[o] }))

var res = []

var current

while (queue.length) {
  current = queue.shift()

  if (set.has(current.object)) {
    continue
  }

  set.add(current.object)

  for (let p of Object.getOwnPropertyNames(current.object)) {
    let d = Object.getOwnPropertyDescriptor(current.object, p)
    if (
      (d.value != null && typeof d.value === 'object') ||
      typeof d.value === 'function'
    ) {
      res.push({
        path: current.path.concat('.').concat(p),
        object: d.value,
      })
    }

    if (d.get) {
      res.push({
        path: current.path.concat('.').concat(p).concat('.get'),
        object: d.get,
      })
    }
    if (d.set) {
      res.push({
        path: current.path.concat('.').concat(p).concat('.set'),
        object: d.set,
      })
    }
  }
}
