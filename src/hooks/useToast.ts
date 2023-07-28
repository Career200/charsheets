export default function useToast(message: string, duration = 2000) {
	const toastElement = document.createElement('div');
	toastElement.className = 'toast';
	toastElement.textContent = message;
	toastElement.style.position = 'fixed';
	toastElement.style.left = '5vw';
	toastElement.style.bottom = '5vh';
	toastElement.style.minWidth = '10vw';
	toastElement.style.padding = '1.5rem';
	toastElement.style.borderRadius = '6px';
	toastElement.style.color = 'white';
	toastElement.style.fontSize = '1.5rem';
	toastElement.style.backgroundColor = 'black';

	document.body.appendChild(toastElement);

	const progressBar = document.createElement('div');
	progressBar.className = 'progress-bar';
	progressBar.style.height = '1rem';
	progressBar.style.width = '100%';
	progressBar.style.backgroundColor = 'red';
	progressBar.style.overflow = 'hidden';
	progressBar.style.transition = `width ${duration}ms linear`;
	progressBar.style.transition = `width ${duration}ms linear`;
	progressBar.style.width = '100%';

	toastElement.appendChild(progressBar);

	setTimeout(() => {
		progressBar.style.width = '0%';
		setTimeout(() => {
			document.body.removeChild(toastElement);
		}, duration);
	}, 10);
}
