// Form Validation
// function myvalidate(){
//    var x = document.forms["myForm"]["myName"].value;
//    if(isNaN(x) == "") {
//     alert("please enter the name");
//    }
//    else {
//     let value=alert("Successfully Submitted");
//     document.getElementById("root").innerHTML="Good Priya";
//    }
// }
class EmployeeData{
    emp1={
        name: 'Rahul',
        empId: 4389,
        Address:{
            CityName: 'Vijawada',
            District: 'Krishna district',
            Pin: 528754,
        },
        Hobbies: ['Netflix','Tennis','Coding'],
    };
    emp2={
        name: 'Ravi',
        empId: 9896,
        Address:{
            CityName: 'Gundur',
            District: 'Prakasham district',
            Pin: 688754,
        }, 
        Hobbies: ['Reading','Swimming','Baking'],
    };
    emp3={
        name: 'Santhosh',
        empId: 8876,
        Address:{
            CityName: 'Warangal',
            District: 'hanumankondan district',
            Pin: 356754,
        },
        Hobbies: ['Gym','Reading','Novels'],
    };
    emp4={
        name: 'Surya',
        empId: 3469,
        Address:{
            CityName: 'Namakkal',
            District: 'Namakkal district',
            Pin: 5179500,
        }, 
        Hobbies: ['Badminton','Tennis','Netflix'],
    };
    emp5={
        name: 'Kiran',
        empId: 8864,
        Address:{
            CityName: 'krishnagiri',
            District: 'Krishnagiri district',
            Pin: 6487921,
        }, 
        Hobbies: ['Gaming','Cooking','Movie'],
    };

}

const empData = new EmployeeData();
const body = document.querySelector('#body');
console.log(body);

const mainbox = document.createElement('div');
mainbox.className = 'mainbox';
body.appendChild(mainbox);

Object.keys(empData).map((emp,index)=>{
const empbox = document.createElement('div');
empbox.className = `emp${index + 1}`;
mainbox.appendChild(empbox);

const h2 = document.createElement('h2');
h2.innerHTML = `Name: ${empData[emp].name}`;
empbox.appendChild(h2);

const h3 = document.createElement('h3');
h3.innerHTML = `Employee Id: ${empData[emp].empId}`;
empbox.appendChild(h3);

const addbox = document.createElement('div');
addbox.className = 'addbox';
empbox.appendChild(addbox);

const h32 = document.createElement('h3');
h32.innerHTML = 'Address:';
addbox.appendChild(h32);

Object.keys(empData[emp].Address).map((add)=>{
const items = document.createElement('p');
items.innerHTML = `<b>${add}:</b> ${empData[emp].Address[add]}`;
addbox.appendChild(items);
});

const hobbybox = document.createElement('p');
empbox.appendChild(hobbybox);
const hobbiesheading = document.createElement('span');
hobbiesheading.innerHTML = '<strong> Hobbies: </strong>';
hobbybox.appendChild(hobbiesheading);

empData[emp].Hobbies.map((hob,index)=>{
const hobbyLength = empData[emp].Hobbies.length;
const hobitems = document.createElement('span');

if (index + 1 !== hobbyLength) {
    hobitems.innerHTML = `${hob},`;
} 
else {
    hobitems.innerHTML = `${hob}.`;
}

hobbybox.appendChild(hobitems);

});

});

console.log(Object.keys(empData));
