import React from "react";
import { FC, ReactNode, useRef } from "react";

interface Props {
	children: ReactNode;
	tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
	const tooltipRef = useRef<HTMLSpanElement>(null);
	const container = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={container}
			onMouseEnter={() => {
				if (!tooltipRef.current || !container.current) return;
				const { width } = container.current.getBoundingClientRect();

				tooltipRef.current.style.left = width / 2 + "px";
				tooltipRef.current.style.transform = "translateX(-50%)";
			}}
			className="group relative inline-block"
		>
			{children}
			{tooltip ? (
				<span
					ref={tooltipRef}
					className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-[#767A7F] text-white p-1 rounded absolute top-full mb-2 whitespace-nowrap"
				>
					{tooltip}
				</span>
			) : null}
		</div>
	);
};

export default ToolTip;
