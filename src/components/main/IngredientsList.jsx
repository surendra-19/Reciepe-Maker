export default function IngredientsList(props){
    return(
         <>
            <h2>Ingredients on hand:</h2>
            <ul>
                {props.ingredientsListItems}
            </ul>
        </>
    );
}