module.exports = function acceptableSequence(str) {
  // write your code here
  var letters = 'abcdefghijklmnopqrstuvwxyz';

	for (var i = 0; i < str.length; i++) {
    var isALetter = letters.includes(str[i]);
		var noSymbolBeforeLetter = str[i - 1] !== '+';
		var noSymbolAfterLetter = str[i + 1] !== '+';

		if (isALetter && (noSymbolBeforeLetter || noSymbolAfterLetter)) {
			return false;
		}
	}
	return true;
}