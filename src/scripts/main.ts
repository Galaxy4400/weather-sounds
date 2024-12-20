const processAudio = (item: HTMLElement) => {
	const audio = item.querySelector('.item__audio') as HTMLAudioElement;

	if (item.classList.contains('active')) {
		audio.play();
	} else {
		audio.pause();
	}
};

const disactiveOthers = (currentItem: HTMLElement) => {
	(document.querySelectorAll('.item') as NodeListOf<HTMLElement>).forEach((item) => {
		if (currentItem === item) return;

		item.classList.remove('active');
		document.querySelector(`[data-bg="${item.dataset.no}"]`).classList.remove('active');

		processAudio(item);
	});
};

const itemClick = (item: HTMLElement) => {
	item.classList.toggle('active');
	document.querySelector(`[data-bg="${item.dataset.no}"]`).classList.toggle('active');

	processAudio(item);

	disactiveOthers(item);
};

export const initialize = () => {
	document.querySelector('.items').addEventListener('click', (e) => {
		const item = (e.target as HTMLElement).closest('.item') as HTMLElement;

		if (item) itemClick(item);
	});
};
