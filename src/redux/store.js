import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./StudentSlice/studentSlice";
import TeacherSlice from "./TeacherSlice/teacherSlice";
import ScienceSlice from "./ScienceSlice/ScienceSlice";
import GroupSlice from "./GroupSlice/GroupSlice";
import GetDocument from './DocumentsSlice/DocumentsSlice';
import LoginSlice from "./AuthSlice/AuthSlice";
import LibrarySlice from "./LibrarySlice/librarySlice";
import ScheduleSlice from "./ScheduleSlice/ScheduleSlice";
import HomeworkSlice from "./HomeworkSlice/HomeworkSlice";
import quizCreateSlice from "./QuizCreateSlice/quizCreateSlice";
import QuizQuestionSlice from "./QuizQuestionSlice/quizQuestionSlice";
const store = configureStore({
    reducer: {
        StudentSlice,
        TeacherSlice,
        ScienceSlice,
        GroupSlice,
        GetDocument,
        LoginSlice,
        LibrarySlice,
        ScheduleSlice,
        HomeworkSlice,
        quizCreateSlice,
        QuizQuestionSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default  store;
