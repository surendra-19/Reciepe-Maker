import IngredientsList from './IngredientsList';
import Input from './Input';
import './Main.css';
import { useState } from 'react';
import Reciepe from './Reciepe';
import GenerateReciepe from './GenerateReciepe';
import {getRecipeFromMistral} from '../../Ai.js'

function Main() {
    const [ingredients,setIngredients] = useState([]);
    const [Reciepe,setReciepe] = useState("");
    const ingredientsListItems = ingredients.map((ingredient)=><li key={ingredient}>{ingredient}</li>);
    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients((prev)=>[...prev,newIngredient])
    }
    async function loadReciepe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setReciepe(recipeMarkdown);
        
    }

  return (
    <>
        <main >
            <Input addIngredient={addIngredient} />
            <section>
                { ingredientsListItems.length > 0 && <IngredientsList ingredientsListItems = {ingredientsListItems}/> }
                { ingredientsListItems.length > 3 && <GenerateReciepe loadReciepe = {loadReciepe} />  }
            </section> 
            { Reciepe && <Reciepe recipe={Reciepe} /> }
        </main>
    </>
  )
}

export default Main