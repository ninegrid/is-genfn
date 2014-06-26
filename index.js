module.exports = function(f){
  return typeof(f) === 'function' && (/^s*function\*/).test(f.toString());
};
