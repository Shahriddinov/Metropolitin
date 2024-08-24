import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Spinner, Layout } from "components";
import ScrollTop from "./hoc/ScrollTop";
import ProtectedRoute from './ProtectedRoute';

const About = lazy(() => import("./pages/About/About"));
const NotFound = lazy(() => import("./pages/404"));
const Login = lazy(() => import("./pages/Login/login"));
const ClassSchedule = lazy(() => import("./pages/ClassSchedule/ClassSchedule"));
const Science = lazy(() => import("./pages/Science/Science"));
const Homework = lazy(() => import("./pages/Homework/Homework"));
const PersonalInformation = lazy(() => import("./pages/PersonalInformation/PersonalInformation"));
const Library = lazy(() => import("./pages/Library/Library"));
const FinalTest = lazy(() => import("./pages/FinalTest/FinalTest"));

const TeacherAbout = lazy(() => import("./pages/TeacherAdmin/components/TeacherAbout/TeacherAbout"));
const TeacherPersonal = lazy(() => import("./pages/TeacherAdmin/components/TeacherInformation/TeacherInformation"));
const TeacherSchedule = lazy(() => import("./pages/TeacherAdmin/components/TeacherSchedule/TeacherSchedule"));
const TeacherScience = lazy(() => import("./pages/TeacherAdmin/components/TeacherScience/TeacherScience"));
const TeacherHomework = lazy(() => import("./pages/TeacherAdmin/components/TeacherHomework/TeacherHomework"));

const AdminHome = lazy(() => import("./pages/Admin/component/Home/Home"));
const AddTeacher = lazy(() => import("./pages/Admin/component/AddTeacher/AddTeacher"));
const AddGroup = lazy(() => import("./pages/Admin/component/AddGroup/AddGroup"));
const AddStudent = lazy(() => import("./pages/Admin/component/AddStudent/AddStudent"));
const AddScience = lazy(() => import("./pages/Admin/component/AddScience/AddScience"));
const AddLibrary = lazy(() => import("./pages/Admin/component/AddLibrary/AddLibrary"));
const AddDocuments = lazy(() => import("./pages/Admin/component/AddDocuments/AddDocuments"));
const AddSchedule = lazy(() => import("./pages/Admin/component/AddSchedule/AddSchedule"));
const AddTest = lazy(() => import("./pages/Admin/component/TestCreation/TestCreation"));

const routes = [
	{ path: "about", element: About, role: "student" },
	{ path: "schedule", element: ClassSchedule, role: "student" },
	{ path: "science", element: Science, role: "student" },
	{ path: "homework", element: Homework, role: "student" },
	{ path: "personal", element: PersonalInformation, role: "student" },
	{ path: "library", element: Library, role: "student" },
	{ path: "test", element: FinalTest, role: "student" },

	{ path: "teacher/about", element: TeacherAbout, role:'teacher' },
	{ path: "teacher/personal", element: TeacherPersonal, role:'teacher' },
	{ path: "teacher/schedule", element: TeacherSchedule, role:'teacher' },
	{ path: "teacher/science", element: TeacherScience, role:'teacher' },
	{ path: "teacher/homework", element: TeacherHomework, role:'teacher' },

	{ path: "admin/home/*", element: AdminHome, role: "admin" },
	{ path: "admin/addTeacher", element: AddTeacher, role: "admin" },
	{ path: "admin/addGroup", element: AddGroup, role: "admin" },
	{ path: "admin/addStudent", element: AddStudent, role: "admin" },
	{ path: "admin/addScience", element: AddScience, role: "admin" },
	{ path: "admin/addLibrary", element: AddLibrary, role: "admin" },
	{ path: "admin/addDocuments", element: AddDocuments, role: "admin" },
	{ path: "admin/addSchedule", element: AddSchedule, role: "admin" },
	{ path: "admin/addTest", element: AddTest, role: "admin" },
];
const RoutesContainer = () => (
	<Router>
		<Layout>
			<Suspense fallback={<Spinner position="full" />}>
				<Routes>
					<Route path="/" element={<Login />} />
					{routes.map((route, key) => {
						const RouteComponent = route.element;
						return (
							<Route
								key={key}
								path={route.path}
								element={<RouteComponent />}
							/>
						);
					})}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	</Router>
);

export default RoutesContainer;
