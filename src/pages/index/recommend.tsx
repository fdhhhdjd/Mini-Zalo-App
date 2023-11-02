import { FinalPrice } from "components/display/final-price";
import { DisplayPrice } from "components/display/price";
import { ProductPicker } from "components/product/picker";
import { Section } from "components/section";
import { ProductSlideSkeleton } from "components/skeletons";
import useStoreProduct from "hooks/useSelectorProduct";
import React, { FC, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { recommendProductsState } from "utils/product";
import { Box, Text } from "zmp-ui";

export const RecommendContent: FC = () => {
	const { products } = useStoreProduct();
	const recommendProducts = recommendProductsState(products);

	return (
		<Section title="Gợi ý cho bạn" padding="title-only">
			<Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
				{recommendProducts.map((product) => (
					<SwiperSlide key={product.id}>
						<ProductPicker product={product.fields}>
							{({ open }) => (
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
								<div onClick={open} className="space-y-3">
									<Box
										className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
										style={{ backgroundImage: `url(${product.fields.image})` }}
									>
										{product.fields.sale && (
											<Text
												size="xxxxSmall"
												className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
											>
												Giảm{" "}
												{product.fields.sale.type === "percent" ? (
													`${product.fields.sale.percent * 100}%`
												) : (
													<DisplayPrice>{product.fields.sale.amount}</DisplayPrice>
												)}
											</Text>
										)}
									</Box>
									<Box className="space-y-1">
										<Text size="small">{product.fields.name}</Text>
										<Text size="xxSmall" className="line-through text-gray">
											<DisplayPrice>{product.fields.price}</DisplayPrice>
										</Text>
										<Text size="large" className="font-medium text-primary">
											<FinalPrice>{product.fields}</FinalPrice>
										</Text>
									</Box>
								</div>
							)}
						</ProductPicker>
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};

export const RecommendFallback: FC = () => {
	const { products } = useStoreProduct();
	const recommendProducts = recommendProductsState(products);

	const recommendProductsNew = [...new Array(recommendProducts.length)];

	return (
		<Section title="Gợi ý cho bạn" padding="title-only">
			<Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
				{recommendProductsNew.map((_, i) => (
					<SwiperSlide key={i}>
						<ProductSlideSkeleton />
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};

export const Recommend: FC = () => {
	const { isLoading } = useStoreProduct();
	return (
		<Suspense fallback={<RecommendFallback />}>{isLoading ? <RecommendFallback /> : <RecommendContent />}</Suspense>
	);
};
