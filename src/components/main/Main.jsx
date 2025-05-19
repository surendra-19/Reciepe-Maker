import './Main.css';
import { useState } from 'react';

function Main() {
    const [ingredients,setIngredients] = useState([]);
    const ingredientsListItems = ingredients.map((ingredient)=><li key={ingredient}>{ingredient}</li>);
    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients((prev)=>[...prev,newIngredient])
    }

  return (
    <>
        <main >
            <form action={addIngredient} className='add-ingredient-form'>
                <input 
                    aria-label='Add ingredient'
                    type='text' 
                    placeholder='e.g. oregano'
                    name='ingredient'
                    required
                />
                <button>Add ingredient</button>
            </form>
            <section>
                {
                    ingredientsListItems.length > 0 && (
                        <>
                            <h2>Ingredients on hand:</h2>
                            <ul>
                                {ingredientsListItems}
                            </ul>
                        </>
                    )
                }
                {
                    ingredientsListItems.length > 4 && (
                        <div className='get-reciepe-container'>
                            <div>
                                <h3>Ready for a reciepe?</h3>
                                <p>Generate a reciepe from the list of ingredients.</p>
                            </div>
                            <button>Get a reciepe</button>
                        </div>
                    )
                }
            </section> 
            
        </main>
    </>
  )
}

export default Main