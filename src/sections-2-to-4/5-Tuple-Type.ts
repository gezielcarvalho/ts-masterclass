// Tuple Type in TypeScript
const courseDetails: [string, number] = ['React', 30];

console.log(courseDetails);

// No explicit type declaration
let courseDetails2 = ['React', 30];

console.log(courseDetails2);

function getCourseDetails(): [string, number] {
  return ['React', 30];
}

let course = getCourseDetails();

console.log(course);

let courseDetailsInferred = ['React', 30];

console.log(courseDetailsInferred);
