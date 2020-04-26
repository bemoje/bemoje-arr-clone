import arrClone from '../src/arr-clone'

describe('arrClone', () => {
	test('works', () => {
		const arr = [1, 2, 3, { a: 1, b: [] }]
		const cloned = arrClone(arr)
		expect(arr === cloned).toBe(false)
		expect(arr).toStrictEqual(cloned)
		expect([1]).toStrictEqual([1])
		expect([1, 2]).toStrictEqual([1, 2])
		expect([1, 2, 3]).toStrictEqual([1, 2, 3])
		expect([]).toStrictEqual([])
	})
})
