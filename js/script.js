const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {
    complain: function catComplain() {
        console.log("Meow!");
    }
}

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7
function listFunction(list) {
    for(let i = 0; i < listFunction.length; i++) {
        console.log(list.name)
    }
}
listFunction(cats);

// question 8
function createCats(cats) {
    for(let i = 0; i < createCats.length; i++) {

    }
}