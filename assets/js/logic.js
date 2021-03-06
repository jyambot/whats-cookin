//FOOD RECIPE RESULT LOGIC
const foodBox = document.querySelector("#foodBox");

function getFood(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Creates img and anchor elements
            const link = document.createElement('a')
            const img = document.createElement('img')
            const foodID = data.meals[0].idMeal
            const foodResult = 'https://www.themealdb.com/meal/' + foodID
            const foodImg = data.meals[0].strMealThumb
            const foodName = data.meals[0].strMeal
            
            //Sets img to thumbnail from API fetch
            img.src = foodImg;
            //Sets link href and text
            link.textContent = data.meals[0].strMeal;
            link.href = foodResult;

            //Appends img to link text
            //Appends link text to html div
            link.appendChild(img);
            foodBox.appendChild(link);

            const foodRecipe = [];
            foodRecipe[0] = foodID;
            foodRecipe[1] = foodName;
            foodRecipe[2] = foodImg;
            localStorage.setItem("foodRecipe", JSON.stringify(foodRecipe));
            console.log(localStorage);
        });
}

//RANDOMZIED DRINK CHOICE LOGIC
const requestRandDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const drinkBox = document.querySelector("#drinkBox");


function getDrink(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // Creates img and anchor elements
            const link = document.createElement('a')
            const img = document.createElement('img')
            const drinkID = data.drinks[0].idDrink
            const drinkResult = 'https://www.thecocktaildb.com/drink/' + drinkID
            const drinkImg = data.drinks[0].strDrinkThumb
            const drinkName = data.drinks[0].strDrink

            //Sets img to thumbnail from API fetch
            img.src = drinkImg
            //Sets link href and text            
            link.textContent = drinkName
            link.href = drinkResult;
            
            //Appends img to link text
            //Appends link text to html div
            link.appendChild(img);
            drinkBox.appendChild(link);
            //Saves most recent drink API information to localStorage
            const drinkRecipe = [];
            drinkRecipe[0] = drinkID;
            drinkRecipe[1] = drinkName;
            drinkRecipe[2] = drinkImg;
            localStorage.setItem("drinkRecipe", JSON.stringify(drinkRecipe));
            console.log(localStorage);
        });
}

// Populate rows with questions and options. Taking the long road on this for now.
var score = 0;

var questionOne = document.getElementById("question-1");
questionOne.textContent = questions[0].title;
for (var i = 0; i < questions[0].options.length; i++) {
    var option = document.createElement("button");
    option.classList.add("option1")
    option.style.display = "block";
    document.getElementById("question-1").appendChild(option);
    option.textContent = questions[0].options[i];
    option.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[0].options[2]) {
            score = score + 300;
            console.log("You have chosen...DESSERT");
        }
        else if (choice == questions[0].options[0]) {
            score = score + 100; 
        }
        else {
            score = score + 200;
        };
        console.log("You chose " + choice);
        console.log(score);
        
        var option1Buttons = document.querySelectorAll(".option1")
        option1Buttons.forEach(function (button) {
            if (button.textContent !== choice  ) {
                button.disabled = true;
            } else {
                button.onclick = null;
            };    
        });

        // if (score < 300) {
        //     option3Buttons.disabled = true; 
        // } 
        // } else {
        //     option2Buttons.disabled = true;
        // }
    };
};
var option2;
var option2Buttons;
var questionTwo = document.getElementById("question-2");
questionTwo.textContent = questions[1].title;
for (var i = 0; i < questions[1].options.length; i++) {
    option2 = document.createElement("button");
    option2.classList.add("option2")
    option2.style.display = "block";
    option2.textContent = questions[1].options[i];
    document.getElementById("question-2").appendChild(option2);
    option2.onclick = function(event) {

        var choice = event.target.textContent;
        if (choice == questions[1].options[0]) {
            score = score + 10;
        }
        else if (choice == questions[1].options[1]) {
            score = score + 20;
        }
        else {
            score = score + 30;
        };
        console.log("You chose " + choice);
        console.log(score);

        option2Buttons = document.querySelectorAll(".option2")
        option2Buttons.forEach(function (button) {
            if (button.textContent !== choice  ) {
                button.disabled = true;
            } else {
                button.onclick = null;
            };           
        });
    };
};

var option3;    
var questionThree = document.getElementById("question-3");
questionThree.textContent = questions[2].title;
for (var i = 0; i < questions[2].options.length; i++) {
    var option3 = document.createElement("button");
    option3.classList.add("option3")
    option3.style.display = "block";
    option3.textContent = questions[2].options[i];
    document.getElementById("question-3").appendChild(option3);
    option3.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[2].options[0]) {
            score = score + 40;
        }
        else if (choice == questions[2].options[1]) {
            score = score + 50;
        }
        else {
            score = score + 60;
        };
        console.log("You chose " + choice);
        console.log(score);

        option3Buttons = document.querySelectorAll(".option3")
        option3Buttons.forEach(function (button) {
            if (button.textContent !== choice  ) {
                button.disabled = true;
            } else {
                button.onclick = null;
            };           
        });
    };
};

var questionFour = document.getElementById("question-4");
questionFour.textContent = questions[3].title;
for (var i = 0; i < questions[3].options.length; i++) {
    var option4 = document.createElement("button");
    option4.classList.add("option4")
    option4.style.display = "block";
    option4.textContent = questions[3].options[i];
    document.getElementById("question-4").appendChild(option4);
    option4.onclick = function(event) {
        var choice = event.target.textContent;
        if (choice == questions[3].options[0]) {
            score++;
        }
        else if (choice == questions[3].options[1]) {
            score = score + 2;
        }
        else {
            score = score + 3;
        };
        console.log("You chose " + choice);
        console.log("Final score is " + score);

        option4Buttons = document.querySelectorAll(".option4")
        option4Buttons.forEach(function (button) {
            if (button.textContent !== choice  ) {
                button.disabled = true;
            } else {
                button.onclick = null;
            };           
        });
    };
};

//LOCAL STORAGE
const lastDrinkRecipe = JSON.parse(localStorage.getItem("drinkRecipe"));
console.log(lastDrinkRecipe);
const lastDrink = document.querySelector("#lastDrink")
function addDrinkHistory() {
    const link = document.createElement('a')
    const img = document.createElement('img')
    const drinkID = lastDrinkRecipe[0]
    const drinkResult = 'https://www.thecocktaildb.com/drink/' + drinkID
    const drinkName = lastDrinkRecipe[1]
    const drinkImg = lastDrinkRecipe[2]

    // Sets img to thumbnail from API fetch
    img.src = drinkImg
     // Sets link href and text            
    link.textContent = drinkName;
    link.href = drinkResult;
            
    //Appends img to link text
     //Appends link text to html div
    link.appendChild(img);
    lastDrink.appendChild(link);
};
const lastFoodRecipe = JSON.parse(localStorage.getItem("foodRecipe"));
console.log(lastFoodRecipe);
const lastFood = document.querySelector('#lastFood')
function addFoodHistory() {
    const link = document.createElement('a')
    const img = document.createElement('img')
    const foodID = lastFoodRecipe[0]
    const foodResult = 'https://www.themealdb.com/meal/' + foodID
    const foodName = lastFoodRecipe[1]
    const foodImg = lastFoodRecipe[2]

    //Sets img to thumbnail from API fetch
    img.src = foodImg;
    //Sets link href and text
    link.textContent = foodName;
    link.href = foodResult;

    //Appends img to link text
    //Appends link text to html div
    link.appendChild(img);
    lastFood.appendChild(link);
}

//USER INPUT -> RECIPE RESULT LOGIC
const errorBox = document.querySelector("#errorBox");
const submitAnswers = document.querySelector('#submit');

submitAnswers.addEventListener("click", function () {
    if (score === 111) {
        getFood(app1);
    } else if (score === 112) {
        getFood(app2);    
    } else if (score === 113) {
        getFood(app3);    
    } else if (score === 121) {
        getFood(app4);    
    } else if (score === 122) {
        getFood(app5);    
    } else if (score === 123) {
        getFood(app6);    
    } else if (score === 131) {
        getFood(app7);    
    } else if (score === 132) {
        getFood(app8);    
    } else if (score === 133) {
        getFood(app9);    
    } else if (score === 211) {
        getFood(ent1);    
    } else if (score === 212) {
        getFood(ent2);    
    } else if (score === 213) {
        getFood(ent3);    
    } else if (score === 221) {
        getFood(ent4);    
    } else if (score === 222) {
        getFood(ent5);    
    } else if (score === 223) {
        getFood(ent6);    
    } else if (score === 231) {
        getFood(ent7);    
    } else if (score === 232) {
        getFood(ent8);    
    } else if (score === 233) {
        getFood(ent9);    
    } else if (score === 341) {
        getFood(des1);    
    } else if (score === 342) {
        getFood(des2);    
    } else if (score === 343) {
        getFood(des3);    
    } else if (score === 351) {
        getFood(des4);    
    } else if (score === 352) {
        getFood(des5);    
    } else if (score === 353) {
        getFood(des6);    
    } else if (score === 361) {
        getFood(des7);    
    } else if (score === 362) {
        getFood(des8);    
    } else if (score === 363) {
        getFood(des9);    
    } else {
        //Creates h2 element
        const h2 = document.createElement('h2')
        //Sets h2 text
        h2.textContent = "Option unavailable, please try again"
        //Appends h2 to html div
        foodBox.appendChild(h2);
    }
    getDrink(requestRandDrink);
    console.log(score);
});

// Reload the page
var startOver = document.getElementById("tryAgain");

startOver.addEventListener("click", function() {
    if(startOver) {
        location.reload();
    };});

addDrinkHistory();
addFoodHistory();