import { createSlice } from '@reduxjs/toolkit'

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     name:"divijkatyal",
//     email:"sample@gmail.com"
//   },
//   reducers: {
//     update: (state,action) => {
//       state.name=action.payload.name;
//       state.email=action.payload.email;
//     },
//     remove: (state) => (state={}),
//     addHello: (state,action) => {
//       state.name="Hello "+action.payload.name;
//     },
//   }
// })

//handle API requests

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo:{
      name:"divijkatyal",
      email:"sample@gmail.com"
    },
    pending:null,
    error:false
  },
  reducers: {
    updateStart:(state)=>{
      state.pending=true;
    },
    updateSucess:(state,action)=>{
      state.pending=false;
      state.userInfo=action.payload;
    },
    updateError:(state)=>{
      state.error=true;
      state.pending=false;
    }
  }
})

// export const { update,remove,addHello} = userSlice.actions
export const {updateStart,updateSucess,updateError}=userSlice.actions;
export default userSlice.reducer;