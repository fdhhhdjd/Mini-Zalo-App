import React, { FC, ReactNode, useRef } from "react";

interface Props {
	children: ReactNode;
	tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
	const tooltipRef = useRef<HTMLSpanElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const timeoutId = useRef<NodeJS.Timeout | null>(null);

	return (
		<div
			ref={container}
			onMouseEnter={() => {
				if (!tooltipRef.current || !container.current) return;

				if (timeoutId.current) clearTimeout(timeoutId.current);
				timeoutId.current = setTimeout(() => {
					if (tooltipRef.current) tooltipRef.current.style.visibility = "hidden";
				}, 2000);
			}}
			onMouseLeave={() => {
				if (timeoutId.current) clearTimeout(timeoutId.current);
				if (tooltipRef.current) tooltipRef.current.style.visibility = "visible";
			}}
			className="group relative inline-block"
		>
			{children}
			{tooltip ? (
				<span
					ref={tooltipRef}
					style={{ left: "50%", transform: "translateX(-50%)" }}
					className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-[#767A7F] text-white p-1 rounded absolute top-10 mb-2 whitespace-nowrap"
				>
					{tooltip}
				</span>
			) : null}
		</div>
	);
};

export default ToolTip;
