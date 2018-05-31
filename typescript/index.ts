declare var tns: any;

/**
 * Entry point for program.
 * 
 * @class Startup
 */
class Startup {
	public static main(): number {
		this.initSlider();
		this.initMenu();
		return 0;
	}

	private static slider;
	private static initSlider() {
		this.slider = tns({
			container: '.slider',
			items: 1,
			gutter: 3,
			autoplay: true,
			nav: false,
			controls: false,
			autoplayButton: false,
			autoplayButtonOutput: false,
		});

		Array.prototype.forEach.call(document.getElementsByClassName('prev-btn'), (elem: HTMLDivElement) => {
			elem.addEventListener('click', (ev: MouseEvent) => {
				this.slider.goTo('prev');
			});
		});

		Array.prototype.forEach.call(document.getElementsByClassName('next-btn'), (elem: HTMLDivElement) => {
			elem.addEventListener('click', (ev: MouseEvent) => {
				this.slider.goTo('next');
			});
		});
	}

	private static initMenu() {
		let lastActiveMenu = 0;
		let menuItems: Array<HTMLUListElement> = [];
		for (let i = 0; i < 100; ++i) {
			let menuItem = (document.getElementById('category-menu-'+i) as HTMLUListElement);
			if (!menuItem)
				break;

			menuItem.addEventListener('click', (ev: MouseEvent) => {
				let newActiveMenu = ev.srcElement.dataset.index;

				// Remove class
				let el = menuItems[lastActiveMenu].children[0];
				let className = 'is-active';
				if (el.classList)
					el.classList.remove(className);
				else
					el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				// Add class
				//console.log(ev.srcElement);
				el = ev.srcElement;
				if (el.classList)
					el.classList.add(className);
				else
					el.className += ' ' + className;

				// Hide previous menu content
				el = (document.getElementById('category-content-'+lastActiveMenu) as HTMLDivElement);
				className = 'is-hidden'
				if (el.classList)
					el.classList.add(className);
				else
					el.className += ' ' + className;

				// Show new menu content
				el = (document.getElementById('category-content-'+newActiveMenu) as HTMLDivElement);
				if (el.classList)
					el.classList.remove(className);
				else
					el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				lastActiveMenu = newActiveMenu;
			});

			menuItems.push(menuItem);
		}
	}
}

Startup.main();