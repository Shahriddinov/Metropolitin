import { configureStore } from "@reduxjs/toolkit";
import language from "./languageSlice";
import AddStudent from "./AddStudent";
import AllStudent from "./getStudentSlice";
import AddTeacher from "./AddTeacherSlice";
import AllTeacher from "./getTeacherSlice"
import AddScience from "./AddScience";
import AllScienceSlice from "./getScienceSlice";
import teacherReducer from './getTeacherSlice/teacherSlice';
import GroupSlice from "./AddGroupSlice";
import GetGroup from "./getGroupSlice";
import GetAllGroups from "./getGroupSlice/groupSlice";
import AddLibrary from "./AddLibrarySlice";
import AddDocument from "./AddDocumentsSlice";
import GetDocument from "./GetDocumentSlice";
import LoginSlice from "./AuthSlice/AuthSlice";
import GetLibrary from "./getLibrarySlice";
import addSchedule from "./AddSchedule";
import getAllScience from "./getScienceSlice/scienceSlice";
import getSchedule from "./getScheduleSlice/getScheduleSlice";
import allSchedule from "./getScheduleSlice/allSchedule";
import allLibrary from "./getLibrarySlice/GetAliiLibrary";
import AddTaskSlice from "./AddHomeworkSlice";
import getHomeworkSlice from "./getHomeworkSlice";
const store = configureStore({
    reducer: {
        AddStudent,
        AllStudent,
        AddTeacher,
        AllTeacher,
        AddScience,
        AllScienceSlice,
        teacherReducer,
        GroupSlice,
        GetGroup,
        GetAllGroups,
        AddLibrary,
        AddDocument,
        GetDocument,
        LoginSlice,
        GetLibrary,
        addSchedule,
        getAllScience,
        getSchedule,
        allSchedule,
        allLibrary,
        AddTaskSlice,
        getHomeworkSlice



    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
