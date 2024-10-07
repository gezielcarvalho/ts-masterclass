var RollNumber;
(function (RollNumber) {
    RollNumber[RollNumber["One"] = 1] = "One";
    RollNumber[RollNumber["Two"] = 2] = "Two";
    RollNumber[RollNumber["Three"] = 300] = "Three";
    RollNumber["Four"] = "12";
    RollNumber[RollNumber["Five"] = 4] = "Five";
    RollNumber[RollNumber["Six"] = 5] = "Six";
})(RollNumber || (RollNumber = {}));
var rollNumber = RollNumber.Four;
console.log(rollNumber);
var rollNumber2 = 301 /* RollNumber2.Four */;
console.log(rollNumber2);
var rollNumberFive = 302 /* RollNumber2.Five */;
console.log({ rollNumberFive: rollNumberFive });
var studentDetails = "Yes" /* StudentDetails.IsPassed */;
var studentDetails2 = "John" /* StudentDetails.Name */;
console.log(studentDetails);
console.log(studentDetails2);
