import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import projectListReducer from "./project-list-reducer";

const rootReducer = combineReducers({
  projectList: projectListReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
