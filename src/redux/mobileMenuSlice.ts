import { createSlice } from '@reduxjs/toolkit'


export const mobileMenuSlice = createSlice({
  name: 'mobile-menu',
  initialState: false,

  reducers: {
    toggle: state => !state,
    
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = mobileMenuSlice.actions

export default mobileMenuSlice.reducer