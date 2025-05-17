import './Main.css';
import { useState } from 'react';

function Main() {
    const [item,setItem] = useState('');
    const [ingredients,setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((ingredient)=><li key={ingredient}>{ingredient}</li>);
    function submitHandler(e){
        e.preventDefault();
        setIngredients((prev)=>[...prev,item])
        setItem('')
    }

  return (
    <>
        <main >
            <form onSubmit={submitHandler} className='add-ingredient-form'>
                <input 
                    aria-label='Add ingredient'
                    type='text' 
                    placeholder='e.g. oregano'
                    name='ingredient'
                    value={item}
                    onChange={(e)=>setItem(e.target.value)}
                />
                <button>Add ingredient</button>
            </form>
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    </>
  )
}

export default Main