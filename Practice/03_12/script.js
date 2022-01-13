/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */



import Shirts from "./Backpack.js"


const myShirt= new Shirts(
    "My Best",
    false,
    true,
    "black",
    1,
    false,
    true
)

const Blue = "BLUE"

console.log("My shirt of choice today: ", myShirt)
console.log("The color of my shirt is: ", myShirt.color)