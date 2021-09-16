const $menu_expand = document.querySelector('.menu_expand');

$menu_expand.addEventListener('click', () => {
    const $itens = document.querySelector('.itens');
    const $display = getComputedStyle($itens).display;
    if ($display === 'none') {
        $itens.style.display = 'flex';
    } else if ($display === 'flex') {
        $itens.style.display = 'none';
    }
})

window.addEventListener('resize', () => {
    const $itens = document.querySelector('.itens');
    const $width = window.innerWidth;
    if ($width >= 700) {
        $itens.style.display = 'none';
    }
})