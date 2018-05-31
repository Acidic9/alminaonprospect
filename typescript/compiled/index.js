var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        this.initSlider();
        this.initMenu();
        return 0;
    };
    Startup.initSlider = function () {
        var _this = this;
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
        Array.prototype.forEach.call(document.getElementsByClassName('prev-btn'), function (elem) {
            elem.addEventListener('click', function (ev) {
                _this.slider.goTo('prev');
            });
        });
        Array.prototype.forEach.call(document.getElementsByClassName('next-btn'), function (elem) {
            elem.addEventListener('click', function (ev) {
                _this.slider.goTo('next');
            });
        });
    };
    Startup.initMenu = function () {
        var lastActiveMenu = 0;
        var menuItems = [];
        for (var i = 0; i < 100; ++i) {
            var menuItem = document.getElementById('category-menu-' + i);
            if (!menuItem)
                break;
            menuItem.addEventListener('click', function (ev) {
                var newActiveMenu = ev.srcElement.dataset.index;
                var el = menuItems[lastActiveMenu].children[0];
                var className = 'is-active';
                if (el.classList)
                    el.classList.remove(className);
                else
                    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                el = ev.srcElement;
                if (el.classList)
                    el.classList.add(className);
                else
                    el.className += ' ' + className;
                el = document.getElementById('category-content-' + lastActiveMenu);
                className = 'is-hidden';
                if (el.classList)
                    el.classList.add(className);
                else
                    el.className += ' ' + className;
                el = document.getElementById('category-content-' + newActiveMenu);
                if (el.classList)
                    el.classList.remove(className);
                else
                    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                lastActiveMenu = newActiveMenu;
            });
            menuItems.push(menuItem);
        }
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=index.js.map