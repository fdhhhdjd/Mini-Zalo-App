import CartPage from "pages/cart";
import CategoryPage from "pages/category";
import HomePage from "pages/index";
import NotificationPage from "pages/notification";
import ProfilePage from "pages/profile";
import SearchPage from "pages/search";
import SuccessPage from "pages/success";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RoutesWithTransition: React.FC = () => {
	const location = useLocation();
	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames="page" timeout={{ enter: 400, exit: 200 }}>
				<Routes location={location}>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/category" element={<CategoryPage />}></Route>
					<Route path="/notification" element={<NotificationPage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
					<Route path="/profile" element={<ProfilePage />}></Route>
					<Route path="/success" element={<SuccessPage />}></Route>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default RoutesWithTransition;
