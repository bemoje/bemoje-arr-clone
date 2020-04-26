(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-clone'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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

	return arrClone;

})));
