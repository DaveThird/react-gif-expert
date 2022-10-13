import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('')
    
    const onInputChange = ({ target }) => {
        //console.log(event.target.value)
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        const newInputvalue = inputValue.trim();
        if(newInputvalue.length <= 1) return;
        //setCategories(categories => [ inputValue, ...categories ])
        setinputValue('');
        onNewCategory( newInputvalue )

    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}