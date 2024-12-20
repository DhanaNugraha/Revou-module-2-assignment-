// Array of Objects for recipes
async function recipeListFetcher() {
  try {
    // throw "ERROR"
    const recipe_list_raw = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const recipe_list_InJson = await recipe_list_raw.json();
    return recipe_list_InJson;
  }
  catch {
    console.log('Error fetching data! Retry or handle the error')
    alert('Error fetching data! Retry or handle the error')
  }
}


// run and store result of async function. Take the first meal in the array.
let recipe_list = await recipeListFetcher()
recipe_list = recipe_list.meals[0]

// DOMs for recipe title, instruction, and image
const recipe_title = document.querySelector(".recipe-title");

const recipe_instruction = document.querySelector(".recipe-instruction");

const recipe_image = document.querySelector(".recipe-image");


// Click event listener for random recipe button
document.getElementById("getRecipeBtn").addEventListener("click", onRandomRecipe);


// Manipulate recipe instruction to create line breaks
function recipeInstructionBuilder(recipeInstructions) {
  // recipe with 2 \n will only need 1 replacement for each \n to get 2 <br\>
  if (recipeInstructions.includes("\r\n\r\n")) {
    return recipeInstructions.replaceAll("\n", "<br/>")
  }
  // replace one \n with 2 <br/>
  else {
    return recipeInstructions.replaceAll("\n", "<br/><br/>")
  }
}


// Function that gives out a random recipe
function onRandomRecipe() {
  // remove get recipe button
  document.getElementById("getRecipeBtn").style.display = "none";

  // Change title text content
  recipe_title.textContent = recipe_list.strMeal;

  // Change innerHtml content for instructions to add the breaks in the string
  recipe_instruction.innerHTML = recipeInstructionBuilder(recipe_list.strInstructions);

  // Add recipe image and adjust width to 200px
  recipe_image.src = recipe_list.strMealThumb;
  recipe_image.style.width = "200px";

  // Set body height to 100% to prevent overflow
  document.getElementById("body").style.height = "100%";
}
