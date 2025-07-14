
export default function cleanErrorStack(err) {
  let { name } = err || {};
  name = String(name);

  let msg = err.message;
  msg = String(msg);

  err.stack = (name === '' ? err.message : (msg === '' ? err.name : `${err.name}: ${err.message}`)) || '';
  return err;
}
