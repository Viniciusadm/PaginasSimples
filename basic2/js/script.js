const $menu_itens = document.querySelectorAll('.menu a');
const $menu_itens_mobile = document.querySelectorAll('.itens a');
const $logo_menu = document.querySelector('.logo_menu');
const $button_header = document.querySelector('header a');
const $nav = document.querySelector('nav');
const $menu_expand = document.querySelector('.menu_expand');
const $body = document.querySelector('body');

const showContent = $number => {
    const $div = document.querySelector(`#photo_content_div${$number}`);
    $div.style.display = 'block';
    $div.style.animation = 'showContent 0.3s';
    $body.style.overflow = 'hidden';
}

const closeContent = $number => {
    const $div = document.querySelector(`#photo_content_div${$number}`);
    $div.style.display = 'none';
    $body.style.overflow = 'visible';
}

$menu_expand.addEventListener('click', () => {
    const $itens = document.querySelector('.itens');
    const $display = getComputedStyle($itens).display;
    if ($display === 'none') {
        $itens.style.display = 'flex';
        $itens.style.animation = 'showContent 0.3s';
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

// document.addEventListener('scroll', () => {
//     const $offset = window.pageYOffset;
//     $menu_itens.forEach($item => {
//         const $id = $item.getAttribute('href');
//         const $section = document.querySelector($id);
//         const $offsetTop = $section.offsetTop;
//         if ($offset >= $offsetTop) {
//             console.log($item);
//             $item.style.color = '#fed136';
//         } else if ($offset < $offsetTop) {
//             $item.style.color = 'white';
//         }
//     })
// })

document.addEventListener('scroll', () => {
    const $offset = window.pageYOffset;
    const $width = window.innerWidth;
    if ($width >= 970) {
        if ($offset <= 10) {
            $nav.style.padding = '1.5rem 8rem';
            $nav.style.position = 'absolute';
            $nav.style.backgroundColor = 'transparent';
            $logo_menu.style.fontSize = '1.8rem';
            $menu_itens.forEach($item => {
                $item.style.fontSize = '1rem';
            });
        } else if ($offset > 10) {
            $nav.style.padding = '1rem 8rem';
            $logo_menu.style.fontSize = '1.3rem';
            $nav.style.position = 'fixed';
            $nav.style.backgroundColor = '#212529';
            $menu_itens.forEach($item => {
                $item.style.fontSize = '0.9rem';
            });
        }
    } else if ($width < 970) {
        $nav.style.padding = '1rem 3rem';
        $logo_menu.fontSize = '1.3rem';
        $menu_itens.forEach($item => {
            $item.style.fontSize = '0.9rem';
        });
    }
})

$button_header.addEventListener('click', $event => {
    $event.preventDefault();
    const $section = document.querySelector('#services');
    const $offset = $section.offsetTop - 60;
    window.scroll({
        top: $offset,
        behavior: 'smooth'
    });
});

$logo_menu.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})

$menu_itens.forEach($item => {
    $item.addEventListener('click', $event => {
        $event.preventDefault();
        const $element = $event.target;
        const $id = $element.getAttribute('href');
        const $section = document.querySelector($id);
        const $offset = $section.offsetTop - 70;
        window.scroll({
            top: $offset,
            behavior: 'smooth'
        });
    });
})

$menu_itens_mobile.forEach($item => {
    $item.addEventListener('click', $event => {
        $event.preventDefault();
        const $element = $event.target;
        const $id = $element.getAttribute('href');
        const $section = document.querySelector($id);
        const $offset = $section.offsetTop - 70;
        window.scroll({
            top: $offset,
            behavior: 'smooth'
        });
    });
})