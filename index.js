// will throw
// 'Sys.ParameterCountException: Sys.ParameterCountException: Parameter count mismatch.'
// due to 'MicrosoftAjax.debug.js' polyfill
function testStartsWith() {
  console.log('> testStartsWith');
  console.log('testStartsWith:', 'hello'.startsWith('ell', 1));
}

function defineStartsWith() {
  console.log('> defineStartsWith');
  String.prototype.startsWith = function (search, index = 0) {
    return (this.substr(index, search.length) === search);
  };
}

function checkAndFix() {
  console.log('> checkAndFix');
  try {
    testStartsWith();
  } catch (error) {
    console.log('error: ', error.message);
    if (error.message === 'Sys.ParameterCountException: Parameter count mismatch.') {
      defineStartsWith();
    }
  }
}

checkAndFix();

testStartsWith();

