const recipe = {
    title: "Spaghetti Carbonara",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  };

const recipe_title = document.getElementsByClassName("recipe-title");

const recipe_instruction = document.getElementsByClassName("recipe-instruction");

const recipe_image = document.getElementsByClassName("recipe-image");


document.getElementById("getRecipeBtn").addEventListener("click", onRandomRecipe);


function onRandomRecipe() {
    document.getElementById("getRecipeBtn").style.display = 'none';

    recipe_title[0].textContent = recipe['title'];

    recipe_instruction[0].textContent = recipe['instructions'];
    
    recipe_image[0].src = recipe['image'];

    recipe_image[0].style.width = "200px";

}