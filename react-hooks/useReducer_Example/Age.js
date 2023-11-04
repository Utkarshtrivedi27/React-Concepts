
import React,{ useReducer } from 'react';

function age_updater(state, action) {    
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }

  if (action.type === 'decremented_age') {
        if (state.age -1 >= 0){
            return {
            age: state.age - 1
            };
        } 
        return{
            age: state.age
        };
  }

  throw Error('Unknown action.');
}

const Age = ()=>{

  const [person, dispatch] = useReducer(age_updater, { age: 25 });

  return (
    <>
      <button onClick={() => {
                        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>

      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        Decrement age
      </button>
      
      <p>Hello! You are {person.age}.</p>
    </>
  );
}

export default Age;
