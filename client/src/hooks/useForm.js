// write your custom hook here to control your checkout form

// import { useLocalStorage } from "./useLocalStorage"

// export const useForm = (key, initialValue) => {
//     const [values, setValues] = useLocalStorage(key, initialValue)

//     const handleChange = event => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.name
//         })
//     }
//     const clearForm = event => {
//         event.preventDefault()
//         setValues(initialValue)
//     }
//     return [values, handleChange, clearForm]
// }

import { useState } from 'react'

function useForm(initialValue){
    const [values, setValues] = useState(initialValue)
    
    const handleChanges = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value 
        })
        console.log(values)
      };

      return [values, handleChanges]
}
export default useForm