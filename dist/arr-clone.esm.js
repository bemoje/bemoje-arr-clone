import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Shallow clone of provided array, 'arr'.
 * @param {Array} arr - The array to clone
 * @returns {Array} The cloned array
 */
function arrClone(arr) {
	assertArgs(arr);
	assertType(Array, arr);

	const len = arr.length;

	if (len === 0) {
		return []
	}

	if (len === 1) {
		return [arr[0]]
	}

	if (len === 2) {
		return [arr[0], arr[1]]
	}

	if (len === 3) {
		return [arr[0], arr[1], arr[2]]
	}

	const ret = new Array(len);

	for (let i = 0; i < len; i++) {
		ret[i] = arr[i];
	}

	return ret
}

export default arrClone;
