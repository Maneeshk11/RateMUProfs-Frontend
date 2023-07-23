import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from "../components/molecules/navBar/navBarSlice";
import directionbarReducer from '../components/molecules/directionBar/directionbarSlice';

export default configureStore({
    reducer: {
        navbar: navbarReducer,
        directionbar: directionbarReducer
    }
})