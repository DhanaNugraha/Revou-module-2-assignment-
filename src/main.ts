// DOMs for recipe title, instruction, and image
const recipe_title = document.querySelector(".recipe-title") as HTMLHeadingElement;

const recipe_instruction = document.querySelector(".recipe-instruction") as HTMLParagraphElement;

const recipe_image = document.querySelector(".recipe-image") as HTMLImageElement;

const recipe_button = document.getElementById("getRecipeBtn") as HTMLButtonElement;

const html_body = document.getElementById("body") as HTMLBodyElement;

// Click event listener for random recipe button
recipe_button.addEventListener("click", onRandomRecipe);

interface Recipe {
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key:string]: string;
}

interface FetchResult {
  data?: {meals: any[]};
  error?: string;
}

export{}
// Array of Objects for recipes
async function recipeListFetcher(): Promise<FetchResult> {
    try {
        const recipe_list_raw = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (!recipe_list_raw.ok) {
          throw new Error (`recipe_list_raw.status`)
        }
        const recipe_list_InJson: {meals: any[]}= await recipe_list_raw.json();
        return {data: recipe_list_InJson}; 
      }
      catch {
        console.log('Error fetching data! Retry or handle the error')
        alert('Error fetching data! Retry or handle the error')
        return {error: 'Error fetching data! Retry or handle the error'}
      }
}

  // Function that gives out a random recipe
  async function onRandomRecipe() {
    let recipe_list_fetch: FetchResult = await recipeListFetcher()
    let recipe_list = recipe_list_fetch.data&&recipe_list_fetch.data.meals[0]
    console.log(recipe_list)

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
  }