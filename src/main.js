Math.PI;

const recipe = [
  {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  },
  {
    title: "Miso Chicken Noodle Soup",
    instructions:
      "1. In a saucepan over medium high heat, heat water to boiling. Add udon noodles. Cook until noodles are softened, 4 to 5 minutes.  2. Add rotisserie chicken. Turn heat to low. Remove 2 to 3 tablespoons water, and stir miso paste into water until smooth. Mix diluted miso paste back into noodles. Cook for 2 to 3 minutes.  3. Ladle soup into bowls and garnish with everything bagel seasoning. ",
    image: "https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg",
  },
];

const recipe_title = document.querySelector(".recipe-title");

const recipe_instruction = document.querySelector(".recipe-instruction");

const recipe_image = document.querySelector(".recipe-image");

document
  .getElementById("getRecipeBtn")
  .addEventListener("click", onRandomRecipe);

let randomRecipeNumber = Math.floor(Math.random() * recipe.length);

console.log(randomRecipeNumber);

function onRandomRecipe() {
  document.getElementById("getRecipeBtn").style.display = "none";

  recipe_title.textContent = recipe[randomRecipeNumber]["title"];

  recipe_instruction.textContent =
    recipe[randomRecipeNumber]["instructions"];

  recipe_image.src = recipe[randomRecipeNumber]["image"];

  recipe_image.style.width = "200px";
}
