import React from "react";

const CoreLoading = () => {
	return (
		<div className="h-screen w-full bg-black/30 fixed inset-0 z-50 flex justify-center items-center ">
			<div className="lds-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default CoreLoading;
