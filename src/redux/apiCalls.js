import axios from 'axios';
import { updateStart,updateError,updateSucess } from './userSlice';

export const updateUser=async(user,dispatch)=>{
    dispatch(updateStart());
    try {
        const res=await axios.post("https",user);
        dispatch(updateStart(res.data));
    } catch (error) {
        dispatch(updateError());
    }
}
