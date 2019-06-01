// CODE here for your Lambda Classes
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }

    adjustStudentsGrade(student) {
        const rollForAddOrSubtract = Math.random();

        let addToGrade;

        if (rollForAddOrSubtract >= .5) {
            addToGrade = true;
        } else {
            addToGrade = false;
        }

        if (addToGrade) {
            let amountToAdd = getRandomInt(1, 15);
            console.log(amountToAdd);
            student.grade += amountToAdd;
        } else {
            let amountToSubtract = getRandomInt(1, 15);
            console.log(amountToSubtract);
            student.grade -= amountToSubtract;
        }

        console.log(`${student.name}'s grade is now at ${student.grade}`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate() {
        if (this.grade > 70) {
            console.log(`Congrats ${this.name} you have graduated!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUP(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 57,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 50,
    favLanguage: 'JavaScript with React',
    specialty: 'Front-end',
    catchPhrase: `Heya Fred!`
});

const willma = new ProjectManager({
    name: 'Willma',
    location: 'Bedrock',
    age: 52,
    gradClassName: 'CS500',
    favInstructor: 'Fred'
});

const betty = new ProjectManager({
    name: 'Betty',
    location: 'Bedrock',
    age: 49,
    gradClassName: 'CS500',
    favInstructor: 'Barney'
});

const pebbles = new Student({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 20,
    previousBackground: 'High School',
    className: 'CS355',
    favSubjects: ['HTML', 'CSS'],
    grade: 99
});

const bambam = new Student({
    name: 'Bam-Bam',
    location: 'Bedrock',
    age: 19,
    previousBackground: 'Burger Flipper',
    className: 'CS355',
    favSubjects: ['Javascript', 'React'],
    grade: 68
});

fred.demo('JS101');
barney.demo('React550');

fred.grade(bambam, 'JS101');
barney.grade(pebbles, 'React550');

pebbles.listsSubjects();
bambam.listsSubjects();

pebbles.PRAssignment('React550');
bambam.PRAssignment('JS101');

pebbles.sprintChallenge('React550');
bambam.sprintChallenge('JS101');

willma.standUP('Web7BC');
betty.standUP('Web6BC');

willma.debugsCode(bambam, 'JS101');
betty.debugsCode(pebbles, 'React550');

fred.adjustStudentsGrade(bambam);
barney.adjustStudentsGrade(pebbles);

pebbles.graduate();
bambam.graduate();