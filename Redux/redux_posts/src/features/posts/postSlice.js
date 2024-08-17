import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Learning redux with react",
        content: "It is another framework or library for react js"
    },
    {
        id: "2",
        title: "Asychronous Javascript",
        content: "Learned about promises, async and await"
    },
    {
        id: "3",
        title: "snowflake",
        content: "working as a developer"
    }
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
        
    }   
})

export const selectAllPosts = (state) => state.posts
export const {postAdded} = postSlice.actions
export default postSlice.reducer