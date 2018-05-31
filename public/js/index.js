(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
