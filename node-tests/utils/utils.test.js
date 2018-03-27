const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			let res = utils.add(33, 11);

			expect(res)
				.toBe(44)
				.toBeA('number');
		});

		it('should async add two numbers', done => {
			utils.asyncAdd(4, 3, sum => {
				expect(sum)
					.toBe(7)
					.toBeA('number');
				done();
			});
		});
	});

	describe('#square', () => {
		it('should square a number', () => {
			let res = utils.square(12);

			expect(res)
				.toBe(144)
				.toBeA('number');
		});

		it('should async square a number', done => {
			utils.asyncSquare(12, res => {
				expect(res)
					.toBe(144)
					.toBeA('number');
				done();
			});
		});
	});
});

it('should verify first and last names are set', () => {
	let user = {
		age: 28,
		location: 'Indiana'
	};

	let res = utils.setName(user, 'Anthony Mourey');

	expect(user).toInclude({
		firstName: 'Anthony',
		lastName: 'Mourey'
	});
});
// it('should expect some values', () => {
// 	// expect(12).toNotBe(14);
// 	// expect({ name: 'Andrew' }).toEqual({ name: 'Andrew' });
// 	// expect([2, 3, 4]).toExclude(1);
// 	expect({
// 		name: 'Anthony',
// 		age: 28,
// 		location: 'Indiana'
// 	}).toInclude({
// 		age: 28
// 	});
// });
