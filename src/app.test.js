const { dayOfWeek } = require("./app")


test('should return responding day string', () => { 
	let day = dayOfWeek(new Date('12/8/2022'))
	
	expect(day).toBe("Thursday");
 })