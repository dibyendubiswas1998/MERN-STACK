// Object Destructure:

const course = {
    corseName: "JavaScript",
    duration: 30,
    price: 1000,
    courseInstructure: "Dibyendu"
}

const {courseInstructure: instructure, price:pc} = course

console.log(`Course Price: ${pc}`);
console.log(`Course Instructure: ${instructure}`);
