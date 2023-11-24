import CartPage from "pages/cart";
import CategoryPage from "pages/category";
import HomePage from "pages/index";
import NotificationPage from "pages/notification";
import ProfilePage from "pages/profile";
import SearchPage from "pages/search";
import SuccessPage from "pages/success";
import React from "react";
import { Route, Routes } from "react-router-dom";

const RoutesWithTransition: React.FC = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/category" element={<CategoryPage />} />
				<Route path="/notification" element={<NotificationPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/success" element={<SuccessPage />} />
			</Routes>
		</React.Fragment>
	);
};

export default RoutesWithTransition;
