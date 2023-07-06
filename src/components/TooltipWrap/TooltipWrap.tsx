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
	const [tooltipPosition, setTooltipPosition] = useState<{
		x: number;
		y: number;
	}>({ x: 0, y: 0 });

	const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
		setShowTooltip(true);
		setTooltipPosition({ x: event.clientX, y: event.clientY });
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
					style={{
						position: 'absolute',
						top: tooltipPosition.y + 10,
						left: tooltipPosition.x + 10,
						padding: '0.5rem',
						backgroundColor: 'black',
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
