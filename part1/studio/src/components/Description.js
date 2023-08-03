import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    const authorLink = "https://tastesbetterfromscratch.com/";
    const authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/about-me.jpg";
    const authorName = "Lauren Allen";
    return (
    <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
        <div>
            <h3>{authorName}</h3>
             <a href={authorLink}>Blog name</a> 
          </div>
    </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
                <div>
                    <h1>New Orleans Gumbo</h1>
                    <p>A delicious southern stew with chicken and sausage.</p>
                </div>
                <RecipeAuthor />
            </div>
           );
        }
}

export default RecipeDescription;