'use strict'

// the content of the cards
const backObject = [
    {
        id: '1',
        media: 'img',
        attribute: 'alt',
        val: "papi transformé en lutin",
        description: 'photo - papi transformé en lutin',
        src: 'https://media.joomeo.com/large/5fd299858f731.jpg'
    },
    {
        id: '2',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson petit papa noel',
        src: 'https://www.youtube.com/embed/sGlXYeiCz_4'
    },
    {
        id: '3',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'enfant 2 ans, jeux n°12',
        src: "https://www.jeuxpourtoutpetit.com/toucher/12-jeux-bebes-boris.php"
    },
    {
        id: '4',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'science : les dinosaures',
        src: 'https://www.youtube.com/embed/HOo-cndmkMk'
    },
    {
        id: '5',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'histoire : pere noel et tom chiffon',
        src: 'https://www.youtube.com/embed/EeOGNEZMZhE'
    },
    {
        id: '6',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson espagnole : estrellita donde estas',
        src: 'https://www.youtube.com/embed/pvxNJ5UwOxc'
    },
    {
        id: '7',
        media: 'img',
        attribute: 'alt',
        val: "mamie transformée en lutin",
        description: 'photo : mamie transformée en lutin',
        src: 'https://media.joomeo.com/large/5fd298fe43e1a.jpg'
    },
    {
        id: '8',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson : vive le vent',
        src: 'https://www.youtube.com/embed/V-PD5iz7qdE'
    },
    {
        id: '9',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'enfants : jeux glisser deposer',
        src: 'https://www.jeuxpourtoutpetit.com/glisser-deposer/10_jeux_costumee.php'
    },
    {
        id: '10',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'science : voyage d une goutte d eau',
        src: 'https://www.youtube.com/embed/DOxxxwnN9UQ'
    },
    {
        id: '11',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'histoire : le grand mechant loup décalé',
        src: 'https://www.youtube.com/embed/X52qW4t5L6Y'
    },
    {
        id: '12',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson anglaise : rain rain go away',
        src: 'https://www.youtube.com/embed/Zu6o23Pu0Do'
    },
    {
        id: '13',
        media: 'img',
        attribute: 'alt',
        val: "papi transformé en père noel",
        description: 'photo : papi transformé en père noel',
        src: 'https://media.joomeo.com/large/5fd298a5a5046.jpg'
    },
    {
        id: '14',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: ' chanson : dans son manteau rouge et blanc petit garçon',
        src: 'https://www.youtube.com/embed/WIgvcWWfxiI'
    },
    {
        id: '15',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'enfants 2 ans : jeux de memoire',
        src: 'https://www.jeuxpourtoutpetit.com/memoire/12-memo-symboles.php'
    },
    {
        id: '16',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'science : les premiers hommes',
        src: 'https://www.youtube.com/embed/Cz4TpP2Isgs'
    },
    {
        id: '17',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'histoire : il était une fois... un petit lapin',
        src: 'https://www.youtube.com/embed/-nHXfnbOZSU'
    },
    {
        id: '18',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson du monde : special dedicace laetitia (sister act 2)',
        src: 'https://www.youtube.com/embed/OaEH1e_DLm0?list=RDOaEH1e_DLm0'
    },
    {
        id: '19',
        media: 'img',
        attribute: 'alt',
        val: "mamie transformée en père noel",
        description: 'photo : mamie transformée en père noel',
        src: 'https://media.joomeo.com/large/5fd2977c7bec9.jpg'
    },
    {
        id: '20',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: ' chanson : le petit renne au nez rouge',
        src: 'https://www.youtube.com/embed/ZvhM29NzpFc'
    },
    {
        id: '21',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'enfants : jeux deplacer',
        src: 'https://www.jeuxpourtoutpetit.com/deplacer/7_jeux_tout_petit_arbre_noel.php'
    },
    {
        id: '22',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'science : tours de magie',
        src: 'https://www.youtube.com/embed/ExnQHxaGnyg'
    },
    {
        id: '23',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'histoire relaxante',
        src: 'https://www.youtube.com/embed/4iTPgErZEUE'
    },
    {
        id: '24',
        media: 'iframe',
        attribute: 'allow',
        val: 'accelerometer',
        description: 'chanson cuba : pata pata',
        src: 'https://www.youtube.com/embed/YRdlmaM-Uik'
    }
]

// Create the calendar
const calendar = document.getElementById('calendar')
for (let i = 0; i < backObject.length; i++) {
    const card = document.createElement('div')
    const double_face = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')
    front.innerHTML = i + 1
    card.setAttribute('data-id', i + 1)
    front.setAttribute('data-attr', i + 1)
    back.id = i + 1
    card.classList.add('card')
    front.classList.add('front', 'display')
    back.classList.add('back')

    double_face.appendChild(front)
    double_face.appendChild(back)
    card.appendChild(double_face)
    calendar.appendChild(card)
}

const returnCard = e => {
    const frontNode = e.target
    const backNode = e.target.parentNode.childNodes[1]
    const dataAttr = e.target.getAttribute('data-attr')
    const iframes = document.querySelectorAll('iframe')
    const images = document.querySelectorAll('img')
    const frontArray = document.querySelectorAll('.front')
    const backArray = document.querySelectorAll('.back')

    // clear the cards
    Array.from(backArray).map(back => {
        Array.from(iframes).forEach(iframe => iframe.remove())
        Array.from(images).forEach(image => image.remove())

        // compare data attribute with id
        if (back.id === dataAttr) {

            // on click on the card, load the content
            let media = document.createElement(backObject[dataAttr - 1].media)

            if (backObject[dataAttr - 1].media === 'iframe') {
                media.setAttribute('allowfullscreen', 'allowfullscreen')
            }
            if (backObject[dataAttr - 1].media === 'img') {
                back.style.background = 'rgba(0, 0, 0, 1)'
            }
            media.src = backObject[dataAttr - 1].src
            media.setAttribute(backObject[dataAttr - 1].attribute, backObject[dataAttr - 1].val)
            back.appendChild(media)

            // flip front and back
            Array.from(frontArray).map(front => {
                front.classList.add('display')
                front.classList.remove('flipper')
            })
            Array.from(backArray).map(back => {
                back.classList.remove('display')
                back.classList.add('flipper')
            })
            frontNode.classList.remove('display')
            frontNode.classList.add('flipper')
            backNode.classList.add('display')
            backNode.classList.remove('flipper')
            backNode.requestFullscreen()
        } else {
            return
        }
    })
}

// run the flip
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', returnCard)
})
