"use strict"
// document ID
const product = document.getElementById("product");
const categoryRow = document.getElementById("categoryRow");
const IngredientsRow = document.getElementById("IngredientsRow");
const productInfo = document.getElementById("productInfo");
const search = document.getElementById("search");
const mailSearch = document.getElementById("mailSearch");
const firstLitterSearch = document.getElementById("firstLitterSearch");
const Categories = document.getElementById("Categories");
const Area = document.getElementById("Area");
const AreaRow = document.getElementById("AreaRow");
const Ingredients = document.getElementById("Ingredients");
const Contact = document.getElementById("Contact");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const ageInput = document.getElementById("ageInput");
const passwordInput = document.getElementById("passwordInput");
const rePasswordInput = document.getElementById("rePasswordInput");
const nameAlert = document.getElementById("nameAlert");
const emailAlert = document.getElementById("emailAlert");
const phoneAlert = document.getElementById("phoneAlert");
const ageAlert = document.getElementById("ageAlert");
const passwordAlert = document.getElementById("passwordAlert");
const rePasswordAlert = document.getElementById("rePasswordAlert");
const submitBtn = document.getElementById("submitBtn");
// variable 
let URL = "https://www.themealdb.com/api/json/v1/1/search.php?s"
let productArray = [];
let categoryArray = [];
let AreaArray = [];
let AreaProd = [];
let AreaResult = [];
let IngredientsMeals = [];
let isClick = true;
let isLoud = false;
// call function
getData(URL);
getCateData();
getIngredientsMeals();
mailList();
louder();
// ready loud
function louder() {
    $("document").ready(function () {
        if (!isLoud) {
            $(".loud").hide(1000, function () {
                document.body.style.overflow = "auto";
            })
        };
    });
}
// ====================================================
// validate sign in
function validateName() {
    let regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nameInput.value)) {
        nameAlert.classList.remove("d-none");
        return false;
    } else if (nameInput.value == "") {
        nameAlert.classList.add("d-none");
        return false;
    }
    else {
        nameAlert.classList.add("d-none");
        return true;
    }
}
function validateEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(emailInput.value)) {
        emailAlert.classList.remove("d-none");
        return false;
    } else if (emailInput.value == "") {
        emailAlert.classList.add("d-none");
        return false;
    }
    else {
        emailAlert.classList.add("d-none");
        return true;
    }
}
function validatePass() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(passwordInput.value)) {
        passwordAlert.classList.remove("d-none");
        return false;
    } else if (passwordInput.value == "") {
        passwordAlert.classList.add("d-none");
        return false;
    }
    else {
        passwordAlert.classList.add("d-none");
        return true;
    }
}
function rePassValidate() {
    if (passwordInput.value != rePasswordInput.value) {
        rePasswordAlert.classList.remove("d-none")
        return false;
    } else if (rePasswordInput.value == "") {
        rePasswordAlert.classList.add("d-none");
        return false;
    }
    else {
        rePasswordAlert.classList.add("d-none")
        return true;
    }
}
function phoneInputValid() {
    let regex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
    if (!regex.test(phoneInput.value)) {
        phoneAlert.classList.remove("d-none");
        return false;
    } else if (phoneInput.value == "") {
        phoneAlert.classList.add("d-none");
        return false;
    }
    else {
        phoneAlert.classList.add("d-none");
        return true;
    }
}
function ageInputValid() {
    if (ageInput.value > 90 || ageInput.value < 18) {
        ageAlert.classList.remove("d-none");
        return false;
    } else if (ageInput.value == "") {
        ageAlert.classList.add("d-none");
        return false;
    }
    else {
        ageAlert.classList.add("d-none");
        return true;
    }
}
nameInput.addEventListener("keypress", function () {
    validateName();
    submit();
})
emailInput.addEventListener("keypress", function () {
    validateEmail();
    submit();
})
passwordInput.addEventListener("keypress", function () {
    validatePass();
    submit();
})
rePasswordInput.addEventListener("keyup", function () {
    rePassValidate()
    submit();
})
phoneInput.addEventListener("keyup", function () {
    phoneInputValid()
    submit();
})
ageInput.addEventListener("keyup", function () {
    ageInputValid()
    submit();
})
function submit() {
    if (validateName() && validateEmail() && validatePass() && rePassValidate() && phoneInputValid() && ageInputValid()) {
        submitBtn.removeAttribute("disabled");
    }
    submitBtn.addEventListener("click", function () {
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        rePasswordInput.value = "";
        ageInput.value = "";
        phoneInput.value = "";
        submitBtn.setAttribute("disabled", "true");
    })
}
// ====================================================
// nav bar click 
document.getElementById("logoIMG").addEventListener("click", function () {
    location.reload();
});
search.addEventListener("click", function () {
    $(".maiSearch").show(500, function () {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").toggleClass("fa-bars");
        isClick = true;
        hideTaps();
    });
    document.querySelector(".maiSearch").classList.remove("d-none");
    document.querySelector(".maiSearch").classList.add("d-flex");
    $("#container1").hide(400);
    $("#container2").hide(400);
    $("#container3").hide(400);
    $("#container4").hide(400);
    $("#container5").hide(400);
    $("#container6").hide(400);
});
Categories.addEventListener("click", function () {
    $("#container1").hide(400);
    $("#container2").hide(400);
    $("#container4").hide(400);
    $("#container5").hide(400);
    $("#container6").hide(400);
    $(".maiSearch").hide(400);
    document.querySelector(".maiSearch").classList.add("d-none");
    $("#container3").slideDown(500, function () {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").toggleClass("fa-bars");
        isClick = true;
        hideTaps();
    });
})
Area.addEventListener("click", function () {
    $("#container1").hide(400);
    $("#container2").hide(400);
    $("#container3").hide(400);
    $("#container5").hide(400);
    $("#container6").hide(400);
    $(".maiSearch").hide(400);
    document.querySelector(".maiSearch").classList.add("d-none");
    $("#container4").slideDown(100, function () {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").toggleClass("fa-bars");
        isClick = true;
        hideTaps();
    });
})
Ingredients.addEventListener("click", function () {
    $("#container1").hide(400);
    $("#container2").hide(400);
    $("#container3").hide(400);
    $("#container4").hide(400);
    $("#container6").hide(400);
    $(".maiSearch").hide(400);
    document.querySelector(".maiSearch").classList.add("d-none");
    $("#container5").slideDown(500, function () {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").toggleClass("fa-bars");
        isClick = true;
        hideTaps();
    });
})
Contact.addEventListener("click", function () {
    $("#container1").hide(400);
    $("#container2").hide(400);
    $("#container3").hide(400);
    $("#container4").hide(400);
    $("#container5").hide(400);
    $(".maiSearch").hide(400);
    document.querySelector(".maiSearch").classList.add("d-none");
    $("#container6").slideDown(500, function () {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").toggleClass("fa-bars");
        isClick = true;
        hideTaps();
    });
})
// =========================================================================
// search
mailSearch.addEventListener("keydown", function () {
    getData(URL, mailSearch.value);
    $("#container1").show(400);
})
firstLitterSearch.addEventListener("keyup", function () {
    getData(URL, firstLitterSearch.value);
    $("#container1").show(400);
});
firstLitterSearch.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    if (inputValue.length > 1) {
        event.target.value = inputValue.slice(0, 1);
    }

});
// tab nav bar show
function showTabs() {
    $(".navTags").show(300, function () {
        $("#search").animate({ width: "100%" }, function () {
            $("#Categories").animate({ width: "100%" }, function () {
                $("#Area").animate({ width: "100%" }, function () {
                    $("#Ingredients").animate({ width: "100%" }, function () {
                        $("#Contact").animate({ width: "100%" })
                    })
                })
            })
        })
    })
}
function hideTaps() {
    $(".navTags").show(300, function () {
        $("#search").animate({ width: "0px" }, function () {
            $("#Categories").animate({ width: "0px" }, function () {
                $("#Area").animate({ width: "0px" }, function () {
                    $("#Ingredients").animate({ width: "0px" }, function () {
                        $("#Contact").animate({ width: "0px" })
                    })
                })
            })
        })
    })
}
function navBtn() {
    if (isClick) {
        $(".sideNavBar").animate({ left: "0px" }, 700);
        $("#navBtn").removeClass("fa-bars");
        $("#navBtn").addClass("fa-xmark");
        isClick = false;
        showTabs();
    } else {
        $(".sideNavBar").animate({ left: "-285px" }, 700);
        $("#navBtn").removeClass("fa-xmark");
        $("#navBtn").addClass("fa-bars");
        isClick = true;
        hideTaps();
    }
}
// ==================================================
// API data
async function getData(URL, category = "") {
    await fetch(`${URL}=${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            display(data.meals);
            for (let i = 0; i < data.meals.length; i++) {
                productArray.push(data.meals[i]);
                isLoud = true;
                louder();
            }
        })
}
async function getAreaData(URL, category = "") {
    await fetch(`${URL}=${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                AreaResult.push(data.meals[i]);
                isLoud = true;
                louder();
            }
        })
}
async function getCateData() {
    await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCate(data.categories);
            isLoud = true;
            louder();
        })
}
async function mailList() {
    await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                AreaArray.push(data.meals[i].strArea);
            }
            displayArea();
            isLoud = true;
            louder();
        })
}
async function getPrdArea(prod) {
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${prod}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                AreaProd.push(data.meals[i])
            }
            displayPrdArea()
            isLoud = true;
            louder();
        })
}
async function getIngredientsMeals() {
    await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < 24; i++) {
                IngredientsMeals.push(data.meals[i]);
            }
            displayIngredientsMeals();
            isLoud = true;
            louder();
        })
};
// display data
function display(prod) {
    let cartoona = "";
    for (let i = 0; i < prod.length; i++) {
        cartoona += `
        <div class="col-md-3 overflow-hidden position-relative" key="${prod[i].idMeal}" data-mailName="${prod[i].strMeal}">
        <img src="${prod[i].strMealThumb}" alt="${prod[i].strMeal}" key="${prod[i].idMeal}" data-mailName="${prod[i].strMeal}">;
        <div class="maleName d-flex justify-content-center align-items-center fs-1" key="${prod[i].idMeal}" data-mailName="${prod[i].strMeal}">
            ${prod[i].strMeal}
        </div>
    </div>
        `
    }
    product.innerHTML = cartoona;
    eventClick();
    $("#container1").slideDown(1000, function () {
        $(".sideNavBar").removeClass("d-none");
        $(".sideNavBar").addClass("d-flex");
        $(".sideNavBar").animate({ left: "-285px" }, 500);
    });
}
function displayCate(prod) {
    let cartoona = "";
    for (let i = 0; i < prod.length; i++) {
        categoryArray.push(prod[i]);
        cartoona += `
        <div class="col-md-3 overflow-hidden position-relative" key="${prod[i].idCategory}">
        <img src="${prod[i].strCategoryThumb}" alt="${prod[i].strCategory}">;
        <div class="maleName d-flex flex-column justify-content-center align-items-center fs-1"  key="${prod[i].idCategory}">
            <p class="w-100 text-center text-dark"  key="${prod[i].idCategory}">${prod[i].strCategory}</p>
        </div>
    </div>
        `
    }
    categoryRow.innerHTML = cartoona;
    CateEventClick()
}
function displayArea() {
    let cartoona = "";
    for (let i = 0; i < AreaArray.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div class="rounded-2 text-center cursor-pointer text-white position-relative">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${AreaArray[i]}</h3>
                    <div class="position-absolute top-0 bottom-0 start-0 end-0 w-100" style="height = 100% ;" data-Area = ${AreaArray[i]}></div>
                </div>
            </div>
        `
    }
    AreaRow.innerHTML = cartoona;
    eventAreaClick();
}
function displayPrdArea() {
    let cartoona = "";
    for (let i = 0; i < AreaProd.length; i++) {
        cartoona += `
        <div class="col-md-3 overflow-hidden position-relative" key="${AreaProd[i].idMeal}" data-mailName="${AreaProd[i].strMeal}">
        <img src="${AreaProd[i].strMealThumb}" alt="${AreaProd[i].strMeal}" key="${AreaProd[i].idMeal}" data-mailName="${AreaProd[i].strMeal}">;
        <div class="maleName d-flex justify-content-center align-items-center fs-1" key="${AreaProd[i].idMeal}" data-mailName="${AreaProd[i].strMeal}">
            ${AreaProd[i].strMeal}
        </div>
    </div>
        `
    }
    product.innerHTML = cartoona;
    eventProdAreaClick()
    $("#container1").slideDown(1000, function () {
        $("#container4").hide(400);
        $(".sideNavBar").removeClass("d-none");
        $(".sideNavBar").addClass("d-flex");
        $(".sideNavBar").animate({ left: "-285px" }, 500);
    });
}
function displayIngredientsMeals() {
    let cartoona = "";
    for (let i = 0; i < 24; i++) {
        cartoona += `
        <div class="col-md-3">
                <div class="rounded-2 text-center cursor-pointer" key="${IngredientsMeals[i].idIngredient}">
                    <i class="fa-solid fa-drumstick-bite fa-4x text-white" key="${IngredientsMeals[i].idIngredient}"></i>
                    <h3 key="${IngredientsMeals[i].idIngredient}">${IngredientsMeals[i].strIngredient}</h3>
                    <p key="${IngredientsMeals[i].idIngredient}">${IngredientsMeals[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
                </div>
            </div>
        `
    }
    IngredientsRow.innerHTML = cartoona;
    IngredientsEvent()
}
// event data click
function eventClick() {
    let productClick = $(".col-md-3")
    for (let i = 0; i < productClick.length; i++) {
        productClick[i].addEventListener("click", function (e) {
            for (let i = 0; i < productArray.length; i++) {
                if (+e.target.getAttribute("key") == productArray[i].idMeal) {
                    showMoreInfo(productArray[i])
                }
            }
        })
    }
}
function eventAreaClick() {
    let productClick = $(".col-md-3")
    for (let i = 0; i < productClick.length; i++) {
        productClick[i].addEventListener("click", function (e) {
            for (let i = 0; i < productArray.length; i++) {
                if (e.target.getAttribute("data-Area") == AreaArray[i]) {
                    getPrdArea(AreaArray[i]);
                }
            }
        })
    }
}
function eventProdAreaClick() {
    let AreaArray = document.querySelectorAll(".col-md-3");
    for (let i = 0; i < AreaArray.length; i++) {
        AreaArray[i].addEventListener("click", async function (e) {
            AreaProd.length = 0;
            await getAreaData(URL, e.target.getAttribute("data-mailName")); //=================
            for (let i = 0; i < AreaResult.length; i++) {
                if (e.target.getAttribute("data-mailName") == AreaResult[i].strMeal) {
                    $("#container4").hide(700);
                    showMoreInfo(AreaResult[i]);
                }
            }
        })
    }
}
function CateEventClick() {
    let productClick = $(".col-md-3")
    for (let i = 0; i < productClick.length; i++) {
        productClick[i].addEventListener("click", function (e) {
            for (let i = 0; i < categoryArray.length; i++) {
                if (e.target.getAttribute("key") == categoryArray[i].idCategory) {
                    $("#container3").hide(400, function () {
                        getData(URL, categoryArray[i].strCategory);
                        $("#container1").fadeIn(600);
                    })
                }
            }
        })
    }
}
function IngredientsEvent() {
    let productClick = $(".col-md-3")
    for (let i = 0; i < productClick.length; i++) {
        productClick[i].addEventListener("click", function (e) {
            for (let i = 0; i < IngredientsMeals.length; i++) {
                if (e.target.getAttribute("key") == IngredientsMeals[i].idIngredient) {
                    productArray.length = 0;
                    getData(URL, IngredientsMeals[i].strIngredient);
                    $("#container5").slideUp(500, function () {
                        $("#container1").show(400);
                    })
                }
            }
        })
    }
}
//more information about  the foods
function showMoreInfo(Recipes) {
    let objectArr = Object.values(Recipes)
    let strMeasure = [];
    let strIngredient = [];
    let UL = "";
    let StrTags = Recipes.strTags;
    if (StrTags == null) {
        StrTags = "No Tags";
    }
    for (let i = 29; i < 49; i++) {
        strMeasure.push(objectArr[i]);
    }
    for (let i = 9; i < 29; i++) {
        strIngredient.push(objectArr[i]);
    }
    for (let i = 0; i < 20; i++) {
        if (strMeasure[i] != "" & strIngredient[i] != "") {
            UL += `<li class="alert alert-info m-2 p-1">${strMeasure[i]} ${strIngredient[i]}</li>`
        }
    }
    let cartoona = `
    <div class="col-md-4">
                <img src="${Recipes.strMealThumb}" class="w-100 rounded-3" alt="${Recipes.strMeal}">
                <h1 class="mt-3 w-100 text-center">${Recipes.strMeal}</h1>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${Recipes.strInstructions}</p>
                <h3 class="fw-bold">Area : ${Recipes.strArea}</h3>
                <h3 class="fw-bold">Category : ${Recipes.strCategory}</h3>
                <h3 class="fw-bold">Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${UL}
                </ul>
                <h1 class="my-5">Tags : <span class="alert alert-secondary text-dark m-2 p-1 fs-2">${StrTags}</span></h1>
                <a target="_blank" href="${Recipes.strSource}" class="btn btn-success mx-2 mb-3">Source</a>
                <a target="_blank" href="${Recipes.strYoutube}" class="btn btn-danger mx-2 mb-3">Youtube</a>
            </div>
    `;
    $("#container1").slideUp(1000, function () {
        document.querySelector(".maiSearch").classList.add("d-none");
        $("#container2").fadeIn(1000);
    });
    productInfo.innerHTML = cartoona;
}
// =================================== End code (●'◡'●) ==========================================
