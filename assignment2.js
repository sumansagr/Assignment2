console.log(" question1");

var employee={

    empId: 108,
    empName: "salman",
    empsal: 300000,
    empGender: "male",
    empNationality : "Indian",
    getEmpDetails: function(){
        return this.empId + " " + this.empName
    }
}
console.log(employee.empId)
console.log(employee.empName)
console.log(employee.empsal)
console.log(employee.empGender)
console.log(employee.empNationality)
console.log(employee.getEmpDetails())


console.log("------------------------------------------------------------")

console.log("question 2")

var student=new Object();

student.rollNo=22,
student.fName="sam",
student.lName="curran",
student.marks=35,
student.behaviour="very bad",
student.gender="male",
student.getStudentDetails= function(){
  return this.fName +" " + this.lName
}

console.log(student)


console.log("------------------------------------------------------------")


console.log("question 4")

console.log(typeof("prathik"));
console.log(typeof(420))


console.log("------------------------------------------------------------")

console.log("question 5")

var student1=[ "ram", "charan" , " harish" , " sathvik"]
console.log(student1)

var employee=[101, 102, 103, 104, 105 ]
console.log(employee)

var student2=[{
    empId: 108,
    empName: "shaikh US",
    empsal: 30000,
    empGender: "male",
    empNationality : "Indian"
}]

console.log(student2)

var student3=[ "fharan", "raise" , " khan" , " jadav"]
for(i=0;i<student3.length;i++)
{
    console.log(student3[i]);
}


var student4=[ "karthik", "pavan" , " vinay" , " nikhil"]
for(i=0;i<student4.length;i++)
{
    console.log(i);
}



console.log("-------------------------------------------------------------------------------------")


console.log("question 6")

var student5= new Array("ramp", "pavan" , " ranjith" , " sandeep")
console.log(student5)



var student6= new Array(
    {
        empId: 108,
        empName: "shaikh US",
        empsal: 30000,
        empGender: "male",
        empNationality : "Indian"
    })
   
console.log(student6)


var student7= new Array(101, 102, 103, 104, 105 );
console.log(student7)

var student8= new Array("sachin", "pavan" , " vijay" , " nandhan" )
for(i=0;i<student8.length;i++)
{
    console.log(student8[i]);
}


var student9= new Array("rakesh", "sharath" , "sharan " , " sandeep" )
for(i=0;i<student8.length;i++)
{
    console.log(i);
}


