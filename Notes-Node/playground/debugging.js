// For terminal debugging run node inspect or nodemon inspect
// For Chrome Console debugging run node --inspect-brk or nodemon --inspect-brk

let person = {
	name: 'Anthony'
};

person.age = 28;

debugger;

person.name = 'Mike';

console.log(person);
