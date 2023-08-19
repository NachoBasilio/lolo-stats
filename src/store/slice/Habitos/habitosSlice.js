import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    habitos: []
}

const habitosSlice = createSlice({
  name: "habitos",
  initialState,
  reducers: {
    addHabito(state, action) {
        state.habitos.push(action.payload)
    },
    removeHabito(state, action) {
        state.habitos = state.habitos.filter(habito => habito.id !== action.payload)
    }
  }
});

export const {
    addHabito,
    removeHabito
} = habitosSlice.actions

export default habitosSlice.reducer