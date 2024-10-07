// Tuple Type in TypeScript
var courseDetails = ['React', 30];
console.log(courseDetails);
// No explicit type declaration
var courseDetails2 = ['React', 30];
console.log(courseDetails2);
function getCourseDetails() {
    return ['React', 30];
}
var course = getCourseDetails();
console.log(course);
var courseDetailsInferred = ['React', 30];
console.log(courseDetailsInferred);
