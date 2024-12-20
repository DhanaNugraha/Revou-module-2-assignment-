var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOMs for recipe title, instruction, and image
const recipe_title = document.querySelector(".recipe-title");
const recipe_instruction = document.querySelector(".recipe-instruction");
const recipe_image = document.querySelector(".recipe-image");
const recipe_button = document.getElementById("getRecipeBtn");
const html_body = document.getElementById("body");
// Click event listener for random recipe button
recipe_button.addEventListener("click", onRandomRecipe);
// Array of Objects for recipes
function recipeListFetcher() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const recipe_list_raw = yield fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            if (!recipe_list_raw.ok) {
                throw new Error(`recipe_list_raw.status`);
            }
            const recipe_list_InJson = yield recipe_list_raw.json();
            return { data: recipe_list_InJson };
        }
        catch (_a) {
            console.log('Error fetching data! Retry or handle the error');
            alert('Error fetching data! Retry or handle the error');
            return { error: 'Error fetching data! Retry or handle the error' };
        }
    });
}
// Function that gives out a random recipe
function onRandomRecipe() {
    return __awaiter(this, void 0, void 0, function* () {
        let recipe_list_fetch = yield recipeListFetcher();
        let recipe_list = recipe_list_fetch.data && recipe_list_fetch.data.meals[0];
        console.log(recipe_list);
        // remove get recipe button
        recipe_button.style.display = "none";
        // Change title text content
        recipe_title.textContent = recipe_list.strMeal;
        // Change innerHtml content for instructions to add the breaks in the string
        recipe_instruction.textContent = recipe_list.strInstructions;
        // Add recipe image and adjust width to 200px
        recipe_image.src = recipe_list.strMealThumb;
        recipe_image.style.width = "200px";
        // Set body height to 100% to prevent overflow
        html_body.style.height = "100%";
    });
}
export {};
