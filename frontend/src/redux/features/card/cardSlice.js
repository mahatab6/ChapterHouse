import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cardItems: []
}

export const cardSlice = createSlice({
    name: "card",
    initialState: initialState,
    reducers:{
        addToCard: (state, action) => {
            const existingItem = state.cardItems.find(item => item._id === action.payload._id)
            if(!existingItem){
              state.cardItems.push(action.payload)
              alert("Item added successfully")
            }
            else(alert("Item already exists"))
        }
    }

})

export const { addToCard } = cardSlice.actions;

export default cardSlice.reducer