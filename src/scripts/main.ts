import data from './data';

export const weather = {
	activeClass: 'active',
	initVolumeValue: 50,
	items: [] as HTMLElement[],
	bgs: [] as HTMLElement[],
	itemsContainer: document.querySelector('.items') as HTMLElement,
	backgroundsContainer: document.querySelector('.main__bg') as HTMLElement,
	range: document.querySelector('.range') as HTMLInputElement,
	currentActiveIndex: null as number | null,
	audio: new Audio(),

	init() {
		this.renderItems();
		this.reunderBackgrounds();
		this.initItemClick();
		this.initAudio();
	},

	initAudio() {
		this.audio.volume = this.initVolumeValue / 100;

		this.range.addEventListener('input', () => {
			this.audio.volume = +this.range.value / 100;
		});
	},

	renderItems() {
		data.forEach((dataItem) => {
			const item = document.createElement('div');
			const bg = document.createElement('img');
			const icon = document.createElement('img');

			item.className = 'item';
			bg.className = 'item__bg';
			icon.className = 'item__icon';

			bg.alt = `bg${dataItem.id}`;
			icon.alt = `icon${dataItem.id}`;

			bg.src = dataItem.background;
			icon.src = dataItem.icon;

			item.append(bg, icon);

			this.itemsContainer.append(item);
			this.items.push(item);
		});
	},

	reunderBackgrounds() {
		data.forEach((dataItem) => {
			const bg = document.createElement('img');

			bg.className = 'main__img';
			bg.alt = `img${dataItem.id}`;
			bg.src = dataItem.background;

			this.backgroundsContainer.append(bg);
			this.bgs.push(bg);
		});
	},

	initItemClick() {
		this.items.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (this.currentActiveIndex !== null || this.currentActiveIndex === i) {
					this.disableItem(this.currentActiveIndex);
				}

				if (this.currentActiveIndex === i) {
					this.currentActiveIndex = null;
					return;
				}

				this.enableItem(i);
				this.currentActiveIndex = i;
			});
		});
	},

	enableItem(i: number) {
		this.items[i].classList.add(this.activeClass);
		this.bgs[i].classList.add(this.activeClass);
		this.audio.src = data[i].sound;
		this.audio.play();
	},

	disableItem(i: number) {
		this.items[i].classList.remove(this.activeClass);
		this.bgs[i].classList.remove(this.activeClass);
		this.audio.pause();
	},
};

// activeClass: 'active',
// initVolumeValue: 50,
// currentActiveIndex: null as null | number,
// items: document.querySelectorAll('.item') as NodeListOf<HTMLElement>,
// views: document.querySelectorAll('.item__view') as NodeListOf<HTMLElement>,
// audios: document.querySelectorAll('.item__audio') as NodeListOf<HTMLAudioElement>,
// ranges: document.querySelectorAll('.item__range') as NodeListOf<HTMLFormElement>,
// images: document.querySelectorAll('.main__img') as NodeListOf<HTMLImageElement>,

// init() {
// 	this.initVolume();
// 	this.initItemClick();
// },

// initVolume() {
// 	this.ranges.forEach((range, i) => {
// 		range.value = this.initVolumeValue;
// 		this.audios[i].volume = range.value / 100;

// 		range.addEventListener('input', () => {
// 			this.audios[i].volume = range.value / 100;
// 		});
// 	});
// },

// initItemClick() {
// 	this.views.forEach((view, i) => {
// 		view.addEventListener('click', () => {
// 			if (this.currentActiveIndex !== null || this.currentActiveIndex === i) {
// 				this.disableItem(this.currentActiveIndex);
// 			}

// 			if (this.currentActiveIndex === i) {
// 				this.currentActiveIndex = null;
// 				return;
// 			}

// 			this.enableItem(i);
// 			this.currentActiveIndex = i;
// 		});
// 	});
// },

// enableItem(i: number) {
// 	this.items[i].classList.add(this.activeClass);
// 	this.images[i].classList.add(this.activeClass);
// 	this.audios[i].play();
// },

// disableItem(i: number) {
// 	this.items[i].classList.remove(this.activeClass);
// 	this.images[i].classList.remove(this.activeClass);
// 	this.audios[i].pause();
// },
