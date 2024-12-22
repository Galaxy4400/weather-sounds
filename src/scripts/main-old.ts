const processAudio = (item: HTMLElement) => {
	const audio = item.closest('.item')?.querySelector('.item__audio') as HTMLAudioElement;

	if (item.closest('.item')?.classList.contains('active')) {
		audio.play();
	} else {
		audio.pause();
	}
};

const disactiveOthers = (currentItem: HTMLElement) => {
	(document.querySelectorAll('.item__view') as NodeListOf<HTMLElement>).forEach((item) => {
		if (currentItem === item) return;

		item.closest('.item')?.classList.remove('active');
		document.querySelector(`[data-bg="${item.dataset.no}"]`)?.classList.remove('active');

		processAudio(item);
	});
};

const itemClick = (item: HTMLElement) => {
	item.closest('.item')?.classList.toggle('active');
	document.querySelector(`[data-bg="${item.dataset.no}"]`)?.classList.toggle('active');

	processAudio(item);

	disactiveOthers(item);
};

const initVolume = () => {
	document.querySelectorAll('.item').forEach((item) => {
		const audio = item.querySelector('.item__audio') as HTMLAudioElement;
		const range = item.querySelector('.item__range') as HTMLInputElement;

		range.value = '50';
		audio.volume = +range.value / 100;

		range.addEventListener('input', () => {
			audio.volume = +range.value / 100;
		});
	});
};

export const initialize = () => {
	initVolume();

	document.querySelector('.items')?.addEventListener('click', (e) => {
		const itemView = (e.target as HTMLElement).closest('.item__view') as HTMLElement;

		if (itemView) itemClick(itemView);
	});
};
