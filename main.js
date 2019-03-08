/*

Learning javaScript 
this a multi line comment





var firstName = 'raja';

console.log(firstName);

var lastName = 'sahu';
var age = 22;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// this is a single line comment

*/
/*
//type coercion

var firstName = 'raja';
var age = 22;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Engineer';
isMarried = false;

console.log(firstName + ' is a'  +age + ' year old' +job + '.is he married? ' +isMarried);

//variable mutation

age = 'twenty two';
job = 'software engineer';

alert(firstName + ' is a '  +age + ' year old ' +job + '.is he married? ' +isMarried);

var lastName = prompt('what is his last Name?');
console.log(firstName + ' ' + lastName);

*/

//Storing different variables and finding the higher one 
/*
var heightMark = 172;
var massMark = 62;
var heightJohn = 163;
var massJohn = 54;

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark); 

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
 
var higherBmi = (bmiMark > bmiJohn);
console.log('is mark bmi higher than john?' + higherBmi);

*/
/*
//boolean logic 

var firstName = 'john';
var age = 24;

if (age < 13) {
	console.log(firstName + ' is a boy');
}else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager');
}else if(age >=20 && age < 30) {
	console.log(firstName + ' is a youngman ');
}else {
	console.log(firstName + ' is a man');
}

*/

/******************************
ternary operator and switch statements */


/*
var firstName = 'john';
var age = 67;
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice'); 

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18){
	var drink = 'beer';

}else {
	var drink = 'juice';
}

*/
/*
//switch statement

var job = 'cop';

switch (job) {
	case 'teacher':
	case 'instructer':
		console.log(firstName + ' teaches kids how to code');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber in LA');
		break;
	case 'designer':
		console.log(firstName + ' designes beautiful websites');
		break;

	default:
		console.log(firstName + ' does something else');
}

age = 45;
switch(true) {
	case age <13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age <20:
		console.log(firstName + ' is a teenager');
		break;
	case age >=20 && age < 30:
		console.log(firstName + ' is a youngman ');
		break;
	default:
		console.log(firstName + ' is a man');

}
*/
// coding challange 2
/*
var scoreJohn = (160 + 120 + 130) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (130 + 134 + 150) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
	console.log(' john wins with ' + scoreJohn + ' points ');
}else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
	console.log(' Mike wins with ' + scoreMike + ' points ');

}else if(scoreMary > scoreJohn && scoreMary >scoreMike ){
	console.log(' Mary wins with ' + scoreMary + ' points ');
}else{
	console.log('match draw');
}
	
*/

/*
//functions

function calculateAge(birthYear ){
	return 2018 - birthYear;

}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1990);
var ageJane = calculateAge(1990);
console.log(ageJohn, ageMike, ageJane);

function yearsUnitllRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement > 0){
		console.log(firstName + ' retires in ' + retirement + ' years.');
	}else{
		console.log(firstName + ' is already retired ');
	}
	
}


yearsUnitllRetirement(1990, 'john');
yearsUnitllRetirement(1969, 'mike');
yearsUnitllRetirement(1947, 'jane');



//function statement and Expressions


var whatDoYoDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return firstName + ' teaches kids how to code ';

		case 'driver':
			return firstName + ' drives an uber in LA ';

		case 'designer':
			return firstName + ' designes websites ';

		default:

			return firstName + ' does something else ';
	}

}

console.log(whatDoYoDo('teacher', 'john'));
console.log(whatDoYoDo('driver', 'mike'));




//Arrays

var names = ['raja', 'krishu', 'galaxy' ];
var years = ['1997', '2009', '2002'];

console.log(names);
console.log(names.length);

//mutued array data
names[1] = 'bunty';
names[names.length] = 'krishu';
console.log(names);



//different data types

var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('MR.');


john.pop();
john.pop();
john.shift();

console.log(john);


console.log(john.indexOf(1990));



//coding challange 3

function tipCalculator(bill){
	
	var percentage;
	if (bill < 50){
		percentage = .2;

	}else if(bill >= 50 && bill < 200){
		 percentage = .15;

	}else{
		 percentage =  .1;
	}
	return percentage * bill;
}




var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]) ];

var finalValues = [bills[0] + tips[0],
bills[1] + tips[1],
bills[2] + tips[2]];

console.log(tips, finalValues);



// Objects and Properties
//object literals
var john = {
	firstName : 'john',
	lastName : 'smith',
	birthYear : 1990,
	family : ['jane', 'mark', 'bob', 'emily'],
	job : 'teacher',
	isMarried : false

};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);


john.job = 'designer';
john['isMarried'] = true;
console.log(john);
//new object syntax
var jane = new Object();
jane.name = 'jane';
jane.birthYear = 1990;
jane['lastName'] = 'smith';
console.log(jane);


var john = {
	firstName : 'john',
	lastName : 'smith',
	birthYear : 1992,
	family : ['jane', 'mark', 'bob', 'emily'],
	job : 'teacher',
	isMarried : false,
	calcAge: function(){
		this.age = 2018 - this.birthYear;
	}

};

john.calcAge();
console.log(john);



//coding challenge 4

var mark = {
	firstName: 'Mark',
	mass: 70,
	height: 1.78,
	BMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}


}

var john = {
	firstName: 'john',
	mass: 80,
	height: 1.98,
	BMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}


}

console.log(mark, john);
if(mark.BMI() > john.BMI()){
	console.log(mark.firstName + ' has a higher bmi of ' + mark.bmi);
}else if(john.bmi > mark.bmi){
	console.log(john.firstName + ' has a higher bmi of ' + john.bmi);
}else{
	console.log('they both have same BMI');
}



//Loops and iteration

var john = ['john', 'smith', 1990, 'teacher', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--){
	console.log(john[i]);
}



//coding challange 5

var john = {
	fullName: 'john smith',
	bills : [124, 48, 268, 180, 42],
	calcTips : function() {
		this.tips = [];
		this.finalValues = [];
		for ( i = 0; i < this.bills.length; i++ ) {
			//determining percentage based on the given tipping rules
			var percentage;
			var bill =this.bills[i];
			if (bill < 50 ) {
				percentage = .2;
			}else if (bill >=50 && bill <200){
				percentage = .15;
			}else {
				percentage = .1;

			}
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
			

		}

		
	}
} 




var mark = {
	fullName: 'Mark smith',
	bills : [77, 375, 110, 45],
	calcTips: function(){
		this.tips = [];
		this.finalValues = [];
		for( i = 0; i < this.bills.length; i++) {
			var percentage;
			var bill = this.bills[i];
			if (bill < 100 ) {
				percentage = .2;
			}else if (bill >= 100 && bill < 300){
				percentage = .1;
			}else {
				percentage = .25;

			}

			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;

		}
	}
}


function calcAverage(tips) {
	var sum = 0;
	for(var i = 0; i < tips.length; i++) {
		sum = sum + tips[1];

	}
	return sum / tips.length;
}

//calculations


mark.calcTips();
john.calcTips();
console.log(mark, john);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
	console.log(john.fullName + ' s family pays higher tips, with an average of $' + john.average);
}else if (mark.average > john.average) {
	console.log(mark.fullName + ' s family pays higher tips, with an average of $' + mark.average);

}




//Function constructor

var john = {
	name: 'john',
	yearOfBirth: 1990,
	job: 'teacher'
};


var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	

}

Person.prototype.calculateAge = function() {
		console.log(2019 - this.yearOfBirth);

	}

Person.prototype.lastName = 'smith';

var john = new Person ('john', 1998, 'teacher');
var jane = new Person ('jane', 1990, 'designer');
var mark = new Person ('mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();


console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lstname);


//example of function constructor

var Student = function(name, yearOfBirth, grade) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.grade = grade;

};

var ram    = new Student ('ram', 1998, 7);
var avnish = new Student ('avnish', 2012, 2);
var krishu = new Student('krishu', 2009, 5);

console.log(ram);
console.log(avnish);
console.log(krishu);

*/


//passing functions as arguements

var years = [1990, 1997, 1995, 1993, 2005];


function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i =0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));

	}
	return arrRes;
}

function calculateAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {

	if(el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	}
	else {
		return -1;
	}

	
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(rates);






























