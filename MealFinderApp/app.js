const searchMeal = async (e) => {
  e.preventDefault();

  //select elements

  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".img");
  const ingredientsOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    title.textContent = strMeal;
    img.style.backgroundImage = `url(${strMealThumb})`;
    info.textContent = strInstructions;
    const ingredients = [];
    for (let i = 1; i < 20; i++) {
      if (meal["strIngredients${i}"]) {
        ingredients.push(
          `${meal[`strIngredients${i}`]}-${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    const html = `
   <span>${ingredients.map((ing) => `<li class="ing">${ing}</li>`).join("")}</span>`;
    ingredientsOutput.innerHTML = html;
  };

  const showAlert = () => {
    alert("Meal Not Found");
  };
  //fetch data

  const fetchMealdata = async (val) => {
    const result = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await result.json();
    return meals;
  };

  //get the user value

  const val = input.value.trim();
  if (val) {
    const meals = await fetchMealdata(val);
    if (!meals) {
      showAlert();
      return;
    }
    meals.forEach(showMealInfo);
  } else {
    alert("please try searching for meals");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", searchMeal);

const maginifier = document.querySelector(".magnifier");
maginifier.addEventListener("click", searchMeal);
