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
