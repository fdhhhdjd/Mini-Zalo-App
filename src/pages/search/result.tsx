// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import { FinalPrice } from "components/display/final-price";
import { ProductPicker } from "components/product/picker";
import { ProductSearchResultSkeleton } from "components/skeletons";
import { useSelectSearch } from "hooks/useSearchProducts";
import { isArray } from "lodash";
import React, { FC } from "react";
import { ProductItem } from "types/product";
import { Box, Text } from "zmp-ui";

const SearchResultContent: FC<{ products: Error | string[] | ProductItem[] | undefined }> = ({ products }) => {
	// const result = useRecoilValue(resultState);

	return (
		<Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
			<Text.Title className="p-4 pt-0" size="small">
				Kết quả ({isArray(products) ? products.length : 0})
			</Text.Title>
			{isArray(products) && products.length > 0 ? (
				<Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
					{products?.map((product) => (
						<ProductPicker key={product.id} product={product}>
							{({ open }) => (
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
								<div onClick={open} className="flex items-center space-x-4">
									<img className="w-[88px] h-[88px] rounded-lg" src={product.fields.image} />
									<Box className="space-y-2">
										<Text>{product.fields.name}</Text>
										<Text size="xSmall" className="text-gray">
											<FinalPrice>{product.fields}</FinalPrice>
										</Text>
									</Box>
								</div>
							)}
						</ProductPicker>
					))}
				</Box>
			) : (
				<Box className="flex-1 flex justify-center items-center pb-24">
					<Text size="xSmall" className="text-gray">
						Không tìm thấy kết quả. Vui lòng thử lại
					</Text>
				</Box>
			)}
		</Box>
	);
};

const SearchResultFallback: FC = () => {
	const result = [...new Array(5)];
	return (
		<Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
			<Text.Title className="p-4 pt-0" size="small">
				Đang tìm kiếm...
			</Text.Title>
			<Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
				{result.map((_, i) => (
					<ProductSearchResultSkeleton key={i} />
				))}
			</Box>
		</Box>
	);
};

export const SearchResult: FC = () => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { resultProduct, loading } = useSelectSearch();

	return (
		<React.Fragment>
			{loading ? <SearchResultFallback /> : <SearchResultContent products={resultProduct} />}
		</React.Fragment>
	);
};
