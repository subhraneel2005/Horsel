import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/data/dataSplice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})
