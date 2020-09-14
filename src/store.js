import { createStore } from 'redux'


const initialState = { 
    employees: [], 
    departments: []
}

function reducer(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}

const store = createStore(reducer)
export default store