const button = document.querySelector('.share-img');
const profile = document.querySelector('.profile-card');
const img = document.querySelector('.profile-picture');
const heading = document.querySelector('h2');
const para = document.querySelector('.profile-p');
const main = document.querySelector('main')
const body = document.querySelector('body')
const fill = document.querySelector('.path')

console.log(body)


button.addEventListener('click', function () {

    const query = window.matchMedia('(min-width: 376px)');

    if (profile.className != 'status-card' & !query.matches) {
        img.remove();
        heading.remove();
        para.remove();
        button.style.backgroundColor = 'hsl(214, 17%, 51%)'
        profile.className = 'status-card'
        const share = document.createElement('p');
        share.textContent = 'SHARE'
        share.className = 'share'
        profile.appendChild(share).className = 'share'
        fill.style.fill = "white"
    } else if (query.matches) {

        const tri = document.createElement('div')
        const div = document.createElement('div')
        body.appendChild(tri).className = 'tri'
        body.appendChild(div).className = 'status'
        button.style.backgroundColor = 'hsl(214, 17%, 51%)'
        fill.style.fill = "white"
        const share = document.createElement('p');
        share.textContent = 'SHARE'
        share.className = 'share'
        div.appendChild(share).className = 'share'
    }
});
