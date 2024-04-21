import { configureStore } from "@reduxjs/toolkit";
import AddRemove from '../features/AddRemove'

export const store = configureStore ({
    reducer: AddRemove,
})