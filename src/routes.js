import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Spinner, Layout } from "components";


import ScrollTop from "./hoc/ScrollTop";

const About = lazy(() => import("./pages/About/About"));
const NotFound = lazy(() => import("./pages/404"));
const Login = lazy(() => import("./pages/Login/login"));
const ClassSchedule = lazy(() => import("./pages/ClassSchedule/ClassSchedule"));
const Science = lazy(() => import("./pages/Science/Science"));
const Homework = lazy(() => import("./pages/Homework/Homework"));
const PersonalInformation = lazy(() => import("./pages/PersonalInformation/PersonalInformation"));
const Library = lazy(() => import("./pages/Library/Library"));
const StudyGuide = lazy(() => import("./pages/Library/component/StudyGuide/StudyGuide"));
const FinalTest = lazy(() => import("./pages/FinalTest/FinalTest"));


const TeacherAbout = lazy(() => import("././pages/TeacherAdmin/components/TeacherAbout/TeacherAbout"));
const TeacherSchedule = lazy(() => import("././pages/TeacherAdmin/components/TeacherSchedule/TeacherSchedule"));
const TeacherScience = lazy(() => import("././pages/TeacherAdmin/components/TeacherScience/TeacherScience"));


const AdminHome = lazy(() => import("./pages/Admin/component/Home/Home"));
const AddTeacher = lazy(() => import("./pages/Admin/component/AddTeacher/AddTeacher"));
const AddGroup = lazy(() => import("./pages/Admin/component/AddGroup/AddGroup"));
const AddStudent = lazy(() => import("./pages/Admin/component/AddStudent/AddStudent"));
const AddScience = lazy(() => import("./pages/Admin/component/AddScience/AddScience"));
const AddLibrary = lazy(() => import("./pages/Admin/component/AddLibrary/AddLibrary"));
const AddDocuments = lazy(() => import("./pages/Admin/component/AddDocuments/AddDocuments"));


const routes = [
	{ path: "about", element: About },
	{ path: "schedule", element: ClassSchedule },
	{ path: "science", element: Science },
	{ path: "homework", element: Homework },
	{ path: "personal", element: PersonalInformation },
	{ path: "library", element: Library },
	{ path: "library/guide", element: StudyGuide },
	{ path: "test", element: FinalTest },
	{ path: "", element: Login },


	{ path: "teacher/about", element: TeacherAbout },
	{ path: "teacher/schedule", element: TeacherSchedule },
	{ path: "teacher/science", element: TeacherScience },



	{ path: "admin/home", element: AdminHome },
	{ path: "admin/addTeacher", element: AddTeacher },
	{ path: "admin/addGroup", element: AddGroup },
	{ path: "admin/addStudent", element: AddStudent },
	{ path: "admin/addScience", element: AddScience },
	{ path: "admin/addLibrary", element: AddLibrary },
	{ path: "admin/addDocuments", element: AddDocuments },

];

const RoutesContainer = () => (
	<Router>
		
			<Layout>
				<Suspense fallback={<Spinner position="full" />}>
					<Routes>
						{routes.map((route, key) => {
							const RouteComponent = ScrollTop(route.element);
							return <Route key={key} path={route.path} element={<RouteComponent />} />;
						})}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Layout>
		
	</Router>
);

export default RoutesContainer;
