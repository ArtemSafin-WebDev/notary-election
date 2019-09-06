export default function() {
    const routerView = document.querySelector('.js-router-view');

    if (!routerView) {
        console.log('No router view');
        return;
    }

    const routes = Array.from(routerView.children);

    const routerLinks = Array.from(document.querySelectorAll('.js-nav-link'));
    const rootRoute = routes.find(route => route.id === '#home');

    function setRoute(link) {
        const hash = link.hash;
        if (hash) {
            const newRoute = routes.find(route => route.id === hash.replace('#', ''));
            if (!newRoute) {
                console.error('Could not find route');
                return;
            }
            routes.forEach(route => route.classList.remove('current'));
            newRoute.classList.add('current');
        }
    }

    routerLinks.forEach(link =>
        link.addEventListener('click', function(event) {
            event.preventDefault();
            setRoute(link);
        })
    );
}
