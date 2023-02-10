import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// imports
import { Provider } from "react-redux";
import store from "./redux/store/store";

//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Feed from "./components/Feed";
import MiPerfil from "./components/MiPerfil";
import UserProfile from "./components/UserProfile";
import AddBlog from "./components/AddBlog";
import SoloBlog from "./components/SoloBlog";
import EditProfile from "./components/EditProfile";
import EditBlog from "./components/EditBlog";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" exact element={<Feed />} />
						<Route path="/miPerfil" element={<MiPerfil />} />
						<Route path="/userProfile/:id" element={<UserProfile />} />
						<Route path="/addBlog" element={<AddBlog />} />
						<Route path="/soloBlog/:id" element={<SoloBlog />} />
						<Route path="/editBlog/:id" element={<EditBlog />} />
						<Route path="/editProfile" element={<EditProfile />} />
					</Route>
					<Route path="/landing" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
