const RecipeAuthor = () => {
   let authorLink = "https://tastesbetterfromscratch.com/";
   let authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/about-me.jpg";
   let authorName = "Lauren Allen";

   return (
      <div>
         <img src={authorPhoto} alt = "Lauren Allen" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['chicken', 'sausage', 'oil and flour', 'onion, celery and pepper', 'water'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>New Orleans Gumbo</h1>
            <p>A delicious southern stew with chicken and sausage.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://tastesbetterfromscratch.com/wp-content/uploads/2017/11/Gumbo-11.jpg" alt="New Orleans Gumbo" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}