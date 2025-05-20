import '../main/Main.css'

export default function Input(props){
    return (
        <>
            <form action={props.addIngredient} className='add-ingredient-form'>
                <input 
                    aria-label='Add ingredient'
                    type='text' 
                    placeholder='e.g. oregano'
                    name='ingredient'
                    required
                />
                <button>Add ingredient</button>
            </form>
        </>
    );
}