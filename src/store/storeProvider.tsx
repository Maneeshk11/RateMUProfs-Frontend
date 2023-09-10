import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from "../components/molecules/navBar/navBarSlice";
import directionbarReducer from '../components/molecules/directionBar/directionbarSlice';
import favouriteReducer from '../features/favouriteSlice';
import professorDetailReducer from '../features/professorDetailSlice';

export default configureStore({
    reducer: {
        navbar: navbarReducer,
        directionbar: directionbarReducer,
        favourite: favouriteReducer,
        professorDetail: professorDetailReducer
    }
})