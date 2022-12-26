import { configureStore } from '@reduxjs/toolkit'
import ComSlice  from './Comslice/Anyslice'

export default configureStore({
  reducer: {
    ComSlice:ComSlice
  },
})