const handleMenu = () => {
    let menu = document.getElementById('menu-list');

    menu.classList.contains('open') ? menu.classList.remove('open') : menu.classList.add('open');
}