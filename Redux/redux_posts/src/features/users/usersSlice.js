import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    { id: "0", name: "tamil" },
    { id: "1", name: "tamizh" },
    { id: "2", name: "abi" }
];

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;