import { Divider } from "components/divider";
import { useVirtualKeyboardVisible } from "hooks";
import React, { FC } from "react";
import { Header, Page } from "zmp-ui";

import { CartItems } from "./cart-items";
import { Delivery } from "./delivery";
import { CartPreview } from "./preview";
import { TermsAndPolicies } from "./term-and-policies";
import { Transfer } from "./transfer";

const CartPage: FC = () => {
	const isKeyboardVisible = useVirtualKeyboardVisible();

	return (
		<Page className="flex flex-col">
			<Header title="Giỏ hàng" showBackIcon={false} />
			<CartItems />
			<Delivery />
			<Divider size={12} />
			<Transfer />
			<TermsAndPolicies />
			<Divider size={32} className="flex-1" />
			{!isKeyboardVisible && <CartPreview />}
		</Page>
	);
};

export default CartPage;
