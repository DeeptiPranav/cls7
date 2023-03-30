// Learnig variable declation and initialisation
var eat_item=false
var a=12;
var x=10;
var y=20;
///x=x+10;
console.log(x);
var A=10;
/*Learning addition of variables
jkklkl-------------*/
var c=a+A; 
const dob="15th March"
var _dob="16-3-2023"
var $dob="17-3-2023"
console.log($dob)
console.log(_dob)
console.log(dob)
console.log("c is :"+c)

var b=a+12;
console.log(b);
var fruit="apple"
if(fruit=="banana")
{
    eat_item=true
    console.log(eat_item)
}
else{
    eat_item=false
    console.log(eat_item)
}

var grocery=["milk", "tea", "sugar","salt","termuric"];
console.log(grocery)
console.log(grocery[3])

var person={
    first_name:"rutvi",
     last_name:"Panchal", 
     class:"8th"
    }
console.log(person);
var x1=5
var x2=5
console.log(x1==x2)
const car1={
    name:"BMW",
    color:"grey",
    price:53400
};

const car3={
    name:"ford",
    color:"red",
    price:65600
}

const car2={
    name:"Honda city",
    color:"blue",
    price:27205
};

var car_collection=[car1,car2,car3]
console.log(car_collection)

console.log(car_collection[0])
console.log(car3.color, car1.price)
console.log(car2)


var person1={
    f_name:"deepti",
    l_name:"pranav",
    full_name:function(){
        return this.f_name +" "+this.l_name
    }
};

console.log(person1.full_name())

/*var teacher="Deepti";
var no_of_stu=2;
console.log(teacher=="Deepti")
no_of_stu++  //no_of_stu=no_of_stu+1

console.log(no_of_stu)
no_of_stu--   //no_of_stu=no_of_stu-1
console.log(no_of_stu)
x +=5 //x= x+5
console.log(x)
x -=2  //x=x-2

console.log(x);

x *=2
console.log(x)
console.log(x!=y)

console.log(x==26 && y==2) //logical &&

console.log(x==26 || y==2)  //logical or

console.log(x!=2)

console.log(typeof(x))
console.log(typeof(teacher))*/

var p=4
var q=8
console.log(p==q)
console.log(p!=q)
console.log(p<=q)
console.log(q>p)
var age="10";
console.log(typeof(age))
age=Number(age);
console.log(age)
console.log(typeof(age))

if(age==12){
console.log("the student is in class 7th");
}
else if(age==10)
{
  console.log("the student is in grade 5")
}

else{
    console.log("student may be in other class")
}

var marks=90;
var subject="Eng"
var division=(marks>=90 ?"First division" : "second division")
console.log(division)

if(marks==80 || subject=="Eng"){
console.log("Student can opt English")
}
else{
  console.log("student should opt some other subject")
}    