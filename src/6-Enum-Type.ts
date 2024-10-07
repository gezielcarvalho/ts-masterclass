enum RollNumber {
  One = 1,
  Two,
  Three = 300,
  Four = '12',
  Five = 4,
  Six,
}

let rollNumber: RollNumber = RollNumber.Four;
console.log(rollNumber);

const enum RollNumber2 {
  One,
  Two = 2,
  Three,
  Four = 301,
  Five,
}

let rollNumber2: RollNumber2 = RollNumber2.Four;
console.log(rollNumber2);

let rollNumberFive: RollNumber2 = RollNumber2.Five;
console.log({ rollNumberFive });

// Heterogeneous Enum
const enum StudentDetails {
  Name = 'John',
  RollNumber = 1,
  IsPassed = 'Yes',
}

let studentDetails: StudentDetails = StudentDetails.IsPassed;
let studentDetails2: StudentDetails = StudentDetails.Name;
console.log(studentDetails);
console.log(studentDetails2);
