function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

const ajs = {
  info
};

export default ajs;

if (typeof window !== 'undefined') {
  window.ajs = ajs;
}