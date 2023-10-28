import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define an interface
interface InitialState {
    value: LaserState
}

// Create an object that adheres to the Person interface
interface LaserState {
    color: string
};
 
const initialState = {
    value: {
        color: "blue" 
    } as LaserState
} as InitialState

export const laser = createSlice({
    name:"laser",
    initialState,
    reducers: {
        changeColor: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    color: action.payload
                }
            }
        }
    }
})


export const {changeColor} = laser.actions
export default laser.reducer