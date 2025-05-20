import IngredientsList from './IngredientsList';
import Input from './Input';
import './Main.css';
import { useState } from 'react';
import Reciepe from './Reciepe';
import GenerateReciepe from './GenerateReciepe';

function Main() {
    const [ingredients,setIngredients] = useState([]);
    const [showReciepe,setShowReciepe] = useState(false);
    const ingredientsListItems = ingredients.map((ingredient)=><li key={ingredient}>{ingredient}</li>);
    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients((prev)=>[...prev,newIngredient])
    }
    function loadReciepe(){
        setShowReciepe(prev => !prev);
    }

  return (
    <>
        <main >
            <Input addIngredient={addIngredient} />
            <section>
                { ingredientsListItems.length > 0 && <IngredientsList ingredientsListItems = {ingredientsListItems}/> }
                { ingredientsListItems.length > 3 && <GenerateReciepe loadReciepe = {loadReciepe} />  }
            </section> 
            { showReciepe && <Reciepe/> }
        </main>
    </>
  )
}

export default Main