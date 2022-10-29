const welcomeAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=`;
const categoryAPI = `//www.themealdb.com/api/json/v1/1/categories.php`;
const areaAPI = `//www.themealdb.com/api/json/v1/1/list.php?a=list`;
const ingredientsAPI = `//www.themealdb.com/api/json/v1/1/list.php?i=list`;
// ********Searcing*********
let nameSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
let letterSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?f=a`;

// $(".close-btn").hide();
$(function () {
  function navAnimate(start, step, type) {
    let btm;
    if (type === "show") {
      btm = "0px";
    } else if (type === "hide") {
      btm = "-300px";
    }
    $(".nav-links li.item1").animate({ bottom: btm, opacity: "1" }, start);
    $(".nav-links li.item2").animate(
      { bottom: btm, opacity: "1" },
      start + step
    );
    $(".nav-links li.item3").animate(
      { bottom: btm, opacity: "1" },
      start + 2 * step
    );
    $(".nav-links li.item4").animate(
      { bottom: btm, opacity: "1" },
      start + 3 * step
    );
    $(".nav-links li.item5").animate(
      { bottom: btm, opacity: "1" },
      start + 4 * step
    );
  }
  $(".open-btn").click(function () {
    $("aside").animate({ left: "0" });
    $(this).addClass("d-none");
    $(".close-btn").removeClass("d-none");
    navAnimate(1200, 100, "show");
    // console.log($(".nav-links li"));
  });
  $(".close-btn").click(function () {
    $(".open-btn").removeClass("d-none");
    $(this).addClass("d-none");
    navAnimate(1200, 100, "hide");
    $("aside").animate({ left: "-208.330px" });
  });

  //   $(".nav-links li").click(function(){
  //     let SecName = $(this).text();
  //     console.log(SecName);
  //     // console.log($(`section .${SecName}`).html());

  //   })

  (function () {
    getWelcomeAPI();
    $("section.welcome").show().siblings().hide();
  })();
  $("li").click(function () {
    let secName = $(this).text().toLowerCase().split(" ").join("");
    $(`section.${secName}`).show().siblings().hide();
    // console.log(secName);
  });
  async function getMealAPI(id) {
    let Meal = await fetch(
      `//www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let res = await Meal.json();

    console.log(id);
    //  console.log(res.meals);
    displayMealDetails(res.meals);
  }
  function displayMealDetails(data) {
    let box = ``;
    console.log(data[0]);
    let {
      strMealThumb,
      strMeal,
      strInstructions,
      strArea,
      strCategory,
      strTags,
      strSource,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
    } = data[0];
    let strTagsBox = strTags?.split(',').map(tag => (
      `<li>${tag}</li>`
    ))
    // console.log(data[0].idMeal);
    box += `
  <div class="col-4">
  <div class="meal">
    <div class="meal-image"> <img class="w-100" src=${strMealThumb} alt=""></div>
    <div class="meal-name"> 
      <p>${strMeal}</p>
    </div>
  </div>
</div>
<div class="col-8"> 
  <div class="meal-details"> 
    <h2>Instructions</h2>
    <p>${strInstructions}</p>
    <p><span>Area : ${strArea}</span></p>
    <p><span>Category : ${strCategory}</span></p>
    <h3>Recipes :</h3>
    <ul> 
      ${
        strMeasure1 &&
        strIngredient1 &&
        `<li>${strMeasure1} ${strIngredient1}</li>`
      } <li>${strMeasure1} ${strIngredient1}</li>
      ${
        strMeasure2 &&
        strIngredient2 &&
        `<li>${strMeasure2} ${strIngredient2}</li>`
      }
      ${
        strMeasure3 &&
        strIngredient3 &&
        `<li>${strMeasure3} ${strIngredient3}</li>`
      }
      ${
        strMeasure4 &&
        strIngredient4 &&
        `<li>${strMeasure4} ${strIngredient4}</li>`
      }
      ${
        strMeasure5 &&
        strIngredient5 &&
        `<li>${strMeasure5} ${strIngredient5}</li>`
      }
      ${
        strMeasure6 &&
        strIngredient6 &&
        `<li>${strMeasure6} ${strIngredient6}</li>`
      }
      ${
        strMeasure7 &&
        strIngredient7 &&
        `<li>${strMeasure7} ${strIngredient7}</li>`
      }
      ${
        strMeasure8 &&
        strIngredient8 &&
        `<li>${strMeasure8} ${strIngredient8}</li>`
      }
      ${
        strMeasure9 &&
        strIngredient9 &&
        `<li>${strMeasure9} ${strIngredient9}</li>`
      }
      ${
        strMeasure10 &&
        strIngredient10 &&
        `<li>${strMeasure10} ${strIngredient10}</li>`
      }
      ${
        strMeasure11 &&
        strIngredient11 &&
        `<li>${strMeasure11} ${strIngredient11}</li>`
      }
      ${
        strMeasure12 &&
        strIngredient12 &&
        `<li>${strMeasure12} ${strIngredient12}</li>`
      }
      ${
        strMeasure13 &&
        strIngredient13 &&
        `<li>${strMeasure13} ${strIngredient13}</li>`
      }
      ${
        strMeasure14 &&
        strIngredient14 &&
        `<li>${strMeasure14} ${strIngredient14}</li>`
      }
      ${
        strMeasure15 &&
        strIngredient15 &&
        `<li>${strMeasure15} ${strIngredient15}</li>`
      }
      ${
        strMeasure16 &&
        strIngredient16 &&
        `<li>${strMeasure16} ${strIngredient16}</li>`
      }
      ${
        strMeasure17 &&
        strIngredient17 &&
        `<li>${strMeasure17} ${strIngredient17}</li>`
      }
      ${
        strMeasure18 &&
        strIngredient18 &&
        `<li>${strMeasure18} ${strIngredient18}</li>`
      }
      ${
        strMeasure19 &&
        strIngredient19 &&
        `<li>${strMeasure19} ${strIngredient19}</li>`
      }
      ${
        strMeasure20 &&
        strIngredient20 &&
        `<li>${strMeasure20} ${strIngredient20}</li>`
      }
      

    </ul>
    
    <h3>Tags :</h3>
    ${
      strTags ?
      `
      <ul> 
      ${strTagsBox}
      </ul>
      `:
      ``
    }
    <a class="btn btn-success text-white me-2" href=${strSource} target="_blank">Source</a><a class="btn youtube text-white" href=${
      data[0].strYoutube
    } target="_blank">Youtube</a>
  </div>
</div>
  `;
    $("#details").html(box);
  }
  async function getWelcomeAPI() {
    let wel = await fetch(welcomeAPI);
    let res = await wel.json();

    //  console.log(res.meals);
    displayWelcome(res.meals);
  }
  function displayWelcome(data) {
    let box = ``;
    let meal = data.map((meal, index) => {
      // console.log(meal);
      box += `
    <div class="col-3">
    <div class="category" id=${meal.idMeal}><img src=${meal.strMealThumb} alt="">
      <p>${meal.strMeal}</p>
    </div>
  </div>
    `;
      $("#welcome").html(box);
      // console.log(meal.idMeal);
    });
    $(".category").click(function () {
      getMealAPI(this.id);
      // console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  function getSearchAPI() {
    $("#sName").keyup(async function (e) {
      nameSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`;
      try {
        let ser = await fetch(nameSearchAPI);
        let res = await ser.json();
        console.log(ser);
        displaySearch(res.meals);
      } catch (error) {
        console.log(error);
      }
    });
    $("#sLetter").keyup(async function (e) {
      letterSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`;
      try {
        let ser = await fetch(letterSearchAPI);
        let res = await ser.json();
        console.log(ser);
        displaySearch(res.meals);
      } catch (error) {
        console.log(error);
      }
    });
  }
  function displaySearch(data) {
    console.log(data);
    let box = ``;
    let ser = data.map((ser, index) => {
      // console.log(ser);
      box += `
    <div class="col-3">
    <div class="item" id=${ser.idMeal}>
    <img src=${ser.strMealThumb} alt="">
      <p>${ser.strMeal}</p>
    </div>
  </div>
    `;
      $("#search").html(box);
    });
    $(".item").click(function () {
      getMealAPI(this.id);
      // console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  getSearchAPI();

  async function getCategoriesAPI() {
    let cat = await fetch(categoryAPI);
    let res = await cat.json();

    console.log(res.categories);
    displayCategories(res.categories);
  }

  function displayCategories(data) {
    let box = ``;
    let cat = data.map((cat, index) => {
      // console.log(cat);
      box += `
    <div class="col-3">
    <div class="categories" id=${cat.strCategory}><img src=${cat.strCategoryThumb} alt="">
      <div class="description">
        <p>${cat.strCategory}</p>
        <p>${cat.strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </div>
  </div>
    `;
      $("#categories").html(box);
    });
    $("div.categories").click(function () {
      getCategoryListAPI(this.id);
      // console.log(this.id);
      $("section.categorylist").show().siblings().hide();
    });
  }
  getCategoriesAPI();
  async function getCategoryListAPI(id){
    let cat = await fetch(`//www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
    let res = await cat.json();

    // console.log(res.categories);
    // console.log(res);
    displayCategoryList(res.meals);
  }
function displayCategoryList(data){
  let box = ``;
  console.log(data);
  let cat = data.map((cat, index) => {
    // console.log(cat);
    box += `
    <div class="col-3">
    <div class="categorylist" id=${cat.idMeal}><img src=${cat.strMealThumb} alt="">
      <p>${cat.strMeal}</p>
    </div>
  </div>
  `;
  $("#categorylist").html(box);
});

  $("div.categorylist").click(function () {
    // $("section").hide();
    getMealAPI(this.id);
    console.log(this.id);
    $("section.details").show().siblings().hide();
    // $("section.categorylist").show().siblings().hide();
  });
}
  async function getAreaAPI() {
    let area = await fetch(areaAPI);
    let res = await area.json();

    // console.log(res.meals);
    displayArea(res.meals);
  }
  function displayArea(data) {
    let box = ``;
    // console.log(data);
    let area = data.map((area, index) => {
      // console.log(area);
      box += `
      <div class="col-3">
      <div class="area" id=${area.strArea}><i class="fa-solid fa-city fa-3x"></i>
        <p>${area.strArea}</p>
      </div>
    </div>
      `;
      $("#area").html(box);
    });
    $("div.area").click(function () {
      getAreaListAPI(this.id);
      // console.log(this.id);
      $("section.arealist").show().siblings().hide();
    });
  }
  async function getAreaListAPI(id){
    let cat = await fetch(`//www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);
    let res = await cat.json();

    // console.log(res.categories);
    // console.log(res);
    displayAreaList(res.meals);
  }
  function displayAreaList(data){
    let box = ``;
    console.log(data);
    let area = data.map((area, index) => {
      // console.log(cat);
      box += `
      <div class="col-3">
      <div class="arealist" id=${area.idMeal}><img src=${area.strMealThumb} alt="">
        <p>${area.strMeal}</p>
      </div>
    </div>
    `;
    $("#arealist").html(box);
  });
  
    $("div.arealist").click(function () {
      // $("section").hide();
      getMealAPI(this.id);
      console.log(this.id);
      $("section.details").show().siblings().hide();
      // $("section.categorylist").show().siblings().hide();
    });
  }
  getAreaAPI();
  async function getIngredientsAPI() {
    let area = await fetch(ingredientsAPI);
    let res = await area.json();

    // console.log(res.meals);
    displayIngredients(res.meals);
  }
  function displayIngredients(data) {
    let box = ``;
    console.log(data);
    let ingredients = data.map((ingredient, index) => {
      // console.log(ingredient);
      box += `
      <div class="col-3">
      <div class="ingredient" id=${ingredient.strIngredient}><i class="fa-solid fa-bowl-food fa-3x"></i>
        <p>${ingredient.strIngredient}</p>
        <p>${ingredient.strDescription?.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </div>
      `;
      $("#ingredients").html(box);
    });
    $(".ingredient").click(function(){
      getIngredientsListAPI(this.id);
      // console.log(this.id);
      $("section.ingredientslist").show().siblings().hide();
    })
  }
  getIngredientsAPI();
  async function getIngredientsListAPI(id){
    let cat = await fetch(`//www.themealdb.com/api/json/v1/1/filter.php?i=${id}`);
    let res = await cat.json();

    // console.log(res.categories);
    console.log(res);
    displayIngredientsList(res.meals);
  }
  function displayIngredientsList(data){
    let box = ``;
    console.log(data);
    let area = data.map((area, index) => {
      // console.log(cat);
      box += `
      <div class="col-3">
      <div class="ingredientslist" id=${area.idMeal}><img src=${area.strMealThumb} alt="">
        <p>${area.strMeal}</p>
      </div>
    </div>
    `;
    $("#ingredientslist").html(box);
  });
  
    $("div.ingredientslist").click(function () {
      // $("section").hide();
      getMealAPI(this.id);
      console.log(this.id);
      $("section.details").show().siblings().hide();
      // $("section.categorylist").show().siblings().hide();
    });
  }
  // $("section").hide(0,function(){
  //   // console.log("ddsdsd");
  //   // $("#welcome").show()
  // })
  // getWelcomeAPI ()
  // async function getCategories (){
  //    let cat = await fetch(welcomeAPI);
  //    let res = await cat.json();
  //    console.log(res);
  // }

  // getCategories ();

  // $("li.item5").click(function(){
  // // console.log($("section.contact").css({"display" : "flex"}));
  // $("section").hide()
  // $("section.contact").show()
  // })
  // console.log($("section.contact").siblings());

  let NameRX = /^[a-zA-Z ]+$/;
  let EmailRX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let PhoneRX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let AgeRX = /^[1-9][0-9]?$|^100$/;
  let PasswordRX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
});
