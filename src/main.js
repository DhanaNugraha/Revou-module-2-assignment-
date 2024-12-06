// import math
Math.PI;

// Array of Objects for recipes
const recipe_list = [
  {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. <br/>\
      2. In a separate pan, cook pancetta until crispy. <br/>\
      3. In a bowl, whisk eggs and grated cheese. <br/>\
      4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. <br/>\
      5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  },
  {
    title: "Miso Chicken Noodle Soup",
    instructions:
      "1. In a saucepan over medium high heat, heat water to boiling. <br/>\
      2. Add udon noodles. Cook until noodles are softened, 4 to 5 minutes. <br/>\
      3. Add rotisserie chicken and turn heat to low. <br/>\
      4. Remove 2 to 3 tablespoons water, and stir miso paste into water until smooth. <br/>\
      5. Mix diluted miso paste back into noodles. Cook for 2 to 3 minutes.  <br/>\
      6. Ladle soup into bowls and garnish with everything bagel seasoning. ",
    image: "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
  },
];

// DOMs for recipe title, instruction, and image
const recipe_title = document.querySelector(".recipe-title");

const recipe_instruction = document.querySelector(".recipe-instruction");

const recipe_image = document.querySelector(".recipe-image");

// Click event listener for random recipe button
document.getElementById("getRecipeBtn").addEventListener("click", onRandomRecipe);

// random number generator for to call for array of recipes
let randomRecipeNumber = Math.floor(Math.random() * recipe_list.length);

console.log(randomRecipeNumber);

// Function that gives out a random recipe
function onRandomRecipe() {
  // remove get recipe button
  document.getElementById("getRecipeBtn").style.display = "none";

  // Change title text content
  recipe_title.textContent = recipe_list[randomRecipeNumber]["title"];

  // Change innerHtml content for instructions to add the breaks in the string
  recipe_instruction.innerHTML = recipe_list[randomRecipeNumber]["instructions"];

  // Add recipe image and adjust width to 200px
  recipe_image.src = recipe_list[randomRecipeNumber]["image"];

  recipe_image.style.width = "200px";
}
