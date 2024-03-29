import objectFitImages from 'object-fit-images';

export default function() {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для метода element.matches();

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }

    // Полифилл метода element.closest();

    Element.prototype.matches = Element.prototype.matches || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
    Element.prototype.closest =
        Element.prototype.closest ||
        function closest(selector) {
            if (!this) return null;
            if (this.matches(selector)) return this;
            if (!this.parentElement) {
                return null;
            } else return this.parentElement.closest(selector);
        };

    // Полифилл для кастомных событий

    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    window.CustomEvent = CustomEvent;

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)

    objectFitImages();
}
