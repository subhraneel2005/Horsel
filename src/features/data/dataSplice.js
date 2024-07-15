import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  formData: {
    horse: '',
    slot: '',
    name: '',
    email: '',
    phone: '',
    altPhone: '',
    date: '',
  },
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload }
    },
  },
})

export const { increment, decrement, incrementByAmount, updateFormData } = dataSlice.actions

export default dataSlice.reducer
