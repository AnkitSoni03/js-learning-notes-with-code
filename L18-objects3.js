const course = {
    coursename: "JavaScript",
    duration: "6 months",
    fees: 5000,
}
//course.fees // return 5000

const {coursename: name, fees} = course; //destructuring possible
console.log(name, fees); // return JavaScript 5000


//json style object format

{
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4"
}

//Api in array json format
[
    {
        "login": "Ankit",
        "id": 101,
        "node_id": "MDQ6VXNlcjExNjEzMzEx",
    },
    {
        "login": "Soni",
        "id": 102,
        "node_id": "MDQ6VXNlcjExNjEzMzEx",
    }
]