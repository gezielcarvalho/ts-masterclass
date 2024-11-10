type CourseDiscounts = 25 | 50 | 75 | 100;

let courseDiscounts: CourseDiscounts = 25;
courseDiscounts = 50;

type CourseType = 'frontend' | 'backend' | 'fullstack';

let courseType: CourseType = 'frontend';
courseType = 'backend';
courseType = 'fullstack';

type Course = {
  name: string;
  discount: CourseDiscounts;
  type: CourseType;
};

const myJSCourse: Course = {
  name: 'JavaScript',
  discount: 25,
  type: 'frontend',
};

const myNodeJSCourse: Course = {
  name: 'NodeJS',
  discount: 50,
  type: 'backend',
};

const myCourses: Course[] = [
  myJSCourse,
  myNodeJSCourse,
  { name: 'React', discount: 75, type: 'frontend' },
];
