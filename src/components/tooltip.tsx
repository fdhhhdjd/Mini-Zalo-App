import React, { FC, ReactNode, useRef, useState } from "react";

interface Props {
	children: ReactNode;
	tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
	const tooltipRef = useRef<HTMLSpanElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	return (
		<div
			ref={container}
			onMouseEnter={() => {
				if (!tooltipRef.current || !container.current) return;
				const { width } = container.current.getBoundingClientRect();

				tooltipRef.current.style.left = width / 2 + "px";
				tooltipRef.current.style.transform = "translateX(-50%)";

				if (timeoutId) clearTimeout(timeoutId);
				const id = setTimeout(() => {
					if (tooltipRef.current) tooltipRef.current.style.visibility = "hidden";
				}, 2000);
				setTimeoutId(id);
			}}
			onMouseLeave={() => {
				if (timeoutId) clearTimeout(timeoutId);
				if (tooltipRef.current) tooltipRef.current.style.visibility = "visible";
			}}
			className="group relative inline-block"
		>
			{children}
			{tooltip ? (
				<span
					ref={tooltipRef}
					className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-[#767A7F] text-white p-1 rounded absolute top-10 mb-2 whitespace-nowrap"
				>
					{tooltip}
				</span>
			) : null}
		</div>
	);
};

export default ToolTip;
