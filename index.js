alert(" hello web3");

let x  = document.getElementById("myEl");//returns one item
x.innerHTML = "abc";

let y = document.getElementsByClassName("myClass");//returns an array
//xL.innerHTML = "def";
y[0].innerHTML = "class element 0";

let z= document.getElementsByTagName("p");
z[0].innerText= "tag name";


///list
///form
////update state

//loops, functions used to update the state

let arr = ["Nairobi", "Kisumu", "Mombasa"];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("element "+ element );
}

console.log("------------------------");
arr.forEach(
     element=>{
        console.log(`element ${element}`);
    }

);
