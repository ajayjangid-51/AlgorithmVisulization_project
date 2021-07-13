var obj1={
    name:"ajay Kumar",
    clg:"SVNIT",
    year:"3rd"
}

console.log(obj1);
// console.log(obj1.prototi );

function Obj(nami){
    this.name = nami;
    this.branch = "cse";
}
function objr(nami){
    // agr apn function meh "this" ka use kr rhe hai then that function is a "object-constructor-function(mtlb ess function se object construct ho jata hai)" and or otherwise it is only the simply function.
    // this.a = nami;
    // this.b = nami+nami;
    return nami+nami+nami;
}

// var fn= function(p1){
//     var v1  = 31;

// }
// console.log(fn);

// var obj2= new Obj("ayan");
console.log('hello');
var obj2= new Obj("ayan");
console.log(obj2);

// var obj3 = new objr("mustafa"); // yaha yeh objr-function ko apnne as a object declare kr diya hai.. joki aseh toh sahi nhi hai...
// console.log(obj3)

var obj4 = objr("sourav");
console.log(obj4); // so toh mtlb yeh obj4 is not a "object" , as it is simply a "variable".

// var obj5 = ob


// and as like this apn "object" k prototype ko edit kr sktehh hai , mtlb uss prototype meh extra variables, functions , objects bana sktehh hai..
Obj.prototype.func1 = function (p1, p2){ // so toh aseh apn Object k prototype meh functions add kr sktehh hai.
    console.log("hello");
    return this.branch; // yaha "this" ka mtlb yeh jo apna "Obj"-Object hai na voh..
    
}
console.log("hello");
// console.log(Obj.prototype.func1("ee" , 32)); // note-point: yeh "Obj" toh "object-defination" hai
console.log(obj2.func1("ee" , "32")); // and yeh "obj2" is a "actual Object-container" hai.

console.log("hello");


// Note-point: apn "Constructor-function se banane huyeh "object" k prototype ko change kr sktehh hai" , but "object-Literal se banaye huyehh Object k prototype ko change nhi kr sktehh hai.."


// note-point2:- agr apn aseh krtehh hai:- then sabhi objects k prototype meh yeh member-function ya member-variable add ho jata hai:- like this:-
Object.prototype.fn1 = function (){
    console.log("hello i am fn1");
}
console.log("..............")


// Note-point:- kisi Object k prototype meh kisi aur Object assign krna apn kr rhe hai:-
function Object1(p1){
    this.var1 = "p1_ajay";
    this.var2 = p1;
}
function Object2(p1 , p2){
    this.var2_1 = "p1_p2_mustafa";
    this.var2_2= p1;
    this.var3 = p2;
}
// console.log(Object1(3)); eska output "undefined" hoga q ki yeh yaha "Object1" toh "defination" hai, and defination meh parameter dena sahi nhi hai.
Object1.prototype = new Object2(4 , 5);
var o1 = new Object1("master@codeforces");
console.log(o1);
// o1.prototypei = new Object2(3 , 4);
// console.log(o1);
console.log(o1.var1);
console.log(o1.var2_1);// so toh mtlb "Object1.prototype = new Object2(4,5)" krne se aab meh Object1-defination k object-variable meh Object2 k members ko bhi use kr skta hu...
console.log(o1.var3);