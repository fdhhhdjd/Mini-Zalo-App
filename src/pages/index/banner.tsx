//* LIB
import { BannerItemSkeleton } from "components/skeletons";
import useStoreBanner from "hooks/useSelectorBanner";
import React from "react";
import { useDispatch } from "react-redux";
//* IMPORT
import { getBannerInitiate, setDataBannerUnmount } from "redux/banner/Actions";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "zmp-ui";

export const Banner: React.FC = () => {
	const dispatch = useDispatch();

	const { banners, isLoading } = useStoreBanner();

	React.useEffect(() => {
		dispatch(getBannerInitiate());
		return () => {
			dispatch(setDataBannerUnmount());
		};
	}, []);

	return (
		<Box className="bg-white" pb={4}>
			{isLoading ? (
				<BannerItemSkeleton />
			) : (
				<Swiper
					modules={[Autoplay, Pagination]}
					pagination={{
						clickable: true
					}}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false
					}}
					loop={true}
					cssMode
				>
					{Array.isArray(banners) &&
						banners.map((banner, i) => (
							<SwiperSlide key={i} className="px-4">
								<Box
									className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
									style={{ backgroundImage: `url(${banner.fields.image})` }}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			)}
		</Box>
	);
};
