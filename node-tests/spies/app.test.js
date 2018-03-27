const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
	let db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Anthony', 28);
		expect(spy).toHaveBeenCalledWith('Anthony', 28);
	});

	it('should call saveUser with user object', () => {
		let email = 'anthony@example.com';
		let password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({ email, password });
	});
});
