import React, { useEffect, useReducer, useState } from 'react'
import { TodoContext } from './todoContext'
import { reducer } from './reducer';
import { getData } from './db';
import { ADD, INIT } from './constants';


function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(()=>{
    getData((data)=>{
      dispatch({
        type: INIT,
        data
      })
    });
  }, [])

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      { children }
    </TodoContext.Provider>
  )
}

export default Provider