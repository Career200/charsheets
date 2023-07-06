import React, { PropsWithChildren } from 'react';
import detectOutsideClick from '../../hooks/DetectOutsideClick';
import './Collapsible.css';

interface CProps extends PropsWithChildren {
	title?: string;
	altTitle?: string;
	boxStyle?: React.CSSProperties;
	openedBoxStyle?: React.CSSProperties;
	listOpenedStyle?: React.CSSProperties;
	callback?: (value?: any) => any;
}

export default function Collapsible({
	children = 'Hello there!',
	title = 'click me',
	altTitle = title,
	boxStyle,
	openedBoxStyle,
	listOpenedStyle,
	callback = (data: string) => {
		console.log(`Selected: ${data}`);
	},
}: CProps) {
	const [open, setOpen] = React.useState(false);
	const [elementWidth, setElementWidth] = React.useState('unset');
	function handleClick() {
		if (open) {
			setOpen(!open);
		}
	}
	const ref: React.RefObject<HTMLDivElement> | null =
		detectOutsideClick(handleClick);

	React.useEffect(() => {
		setElementWidth(ref.current?.offsetWidth + 'px');
	}, [ref]);
	function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === 'Enter' || event.key === ' ') {
			setOpen(!open);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}
	function handleChildKeyDown(event: React.KeyboardEvent<HTMLElement>) {
		if (event.key === 'Escape') {
			setOpen(false);
		} else if (event.key === ' ' || event.key === 'Enter') {
			callback((event.target as HTMLElement).textContent);
		}
	}
	return (
		<div
			style={
				open
					? { ...boxStyle, minWidth: elementWidth, position: 'relative' }
					: { ...openedBoxStyle, minWidth: elementWidth, position: 'relative' }
			}
			onClick={() => {
				setOpen(!open);
			}}
			onKeyDown={handleKeyDown}
			ref={ref}
			tabIndex={0}
			className={`Collapsible ${
				open ? 'Collapsible_opened' : 'Collapsible_closed'
			}`}
		>
			<span>{!open ? title : altTitle}</span>
			<ul
				style={
					open
						? { position: 'absolute', overflow: 'auto', ...listOpenedStyle }
						: {}
				}
			>
				{open &&
					React.Children.map(children, (child) =>
						React.cloneElement(child as React.ReactElement, {
							onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
								handleChildKeyDown(e);
							},
							onClick: (e: React.MouseEvent<HTMLElement>) => {
								callback((e.target as HTMLElement).textContent);
							},
							tabIndex: open ? 0 : -1,
						})
					)}
			</ul>
		</div>
	);
}
