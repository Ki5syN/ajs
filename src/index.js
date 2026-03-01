function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { info };
}

if (typeof window !== 'undefined') {
  window.ajs = { info };
}
