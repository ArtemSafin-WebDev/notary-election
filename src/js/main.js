import '@fancyapps/fancybox';


import polyfills from './polyfills';
import detectTouch from './detectTouch';
import pageRouting from './pageRouting';



document.addEventListener('DOMContentLoaded', function() {
    // Полифиллы

    polyfills();

    // Определение тач устройсв

    detectTouch();

    // Переключение страниц

    pageRouting();
});
