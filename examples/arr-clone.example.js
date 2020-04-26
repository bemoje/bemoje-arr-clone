import arrClone from '../src/arr-clone'

/**
 * compares strict equality of each element in a shallow comparison.
 */
function shallowCompareArrays(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false
		}
	}
	return true
}

const arr = [1, 2]
const cloned = arrClone(arr)

/**
 * ALL ELEMENTS ARE THE SAME
 */
shallowCompareArrays(arr, cloned)
//=> true

/**
 * DO NOT REFER TO THE SAME OBJECT, IE. A "CLONE"
 */
arr === cloned
//=> false
