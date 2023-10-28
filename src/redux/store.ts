import { configureStore} from "@reduxjs/toolkit"
import laserReducer from './features/laserSlice'

export const store = configureStore({
    reducer: {
        laserReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch