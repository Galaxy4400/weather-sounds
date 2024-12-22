export const weather = {
	activeClass: 'active',
	initVolumeValue: 50,
	currentActiveIndex: null as null | number,
	items: document.querySelectorAll('.item') as NodeListOf<HTMLElement>,
	views: document.querySelectorAll('.item__view') as NodeListOf<HTMLElement>,
	audios: document.querySelectorAll('.item__audio') as NodeListOf<HTMLAudioElement>,
	ranges: document.querySelectorAll('.item__range') as NodeListOf<HTMLFormElement>,
	images: document.querySelectorAll('.main__img') as NodeListOf<HTMLImageElement>,

	init() {
		this.initVolume();
		this.initItemClick();
	},

	initVolume() {
		this.ranges.forEach((range, i) => {
			range.value = this.initVolumeValue;
			this.audios[i].volume = range.value / 100;

			range.addEventListener('input', () => {
				this.audios[i].volume = range.value / 100;
			});
		});
	},

	initItemClick() {
		this.views.forEach((view, i) => {
			view.addEventListener('click', () => {
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
		this.images[i].classList.add(this.activeClass);
		this.audios[i].play();
	},

	disableItem(i: number) {
		this.items[i].classList.remove(this.activeClass);
		this.images[i].classList.remove(this.activeClass);
		this.audios[i].pause();
	},
};
