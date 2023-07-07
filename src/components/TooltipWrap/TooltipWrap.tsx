import React, {
	useState,
	PropsWithChildren,
	ReactNode,
	MouseEvent
} from 'react';

interface TooltipWrapperProps extends PropsWithChildren {
	tooltipContent: ReactNode;
	boxStyle?: React.CSSProperties;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
	tooltipContent,
	boxStyle,
	children
}: PropsWithChildren<TooltipWrapperProps>) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{ position: 'relative' }}
		>
			{children}
			{showTooltip && (
				<div
					className="absolute w-fit -bottom-12 p-2 bg-black text-lg whitespace-nowrap"
					style={{
						zIndex: 9999,
						...(boxStyle ?? {})
					}}
				>
					{tooltipContent}
				</div>
			)}
		</div>
	);
};

export default TooltipWrapper;
