/* la variable sections permet d'agir sur toutes les balises sections de la page HTML.*/

let sections = document.getElementsByTagName('section')
let li = document.getElementsByTagName('li')
let leBonneListe = document.getElementsByClassName('liste')

let etudes = document.getElementById('sectionEt')
let contact = document.getElementById('sectionCo')
let loisirs = document.getElementById('sectionLo')

/*console.log permet de debugger le code.*/
console.log(sections)
console.log(li)


/*programmation fonctionnelle */
let clickBouton = function (numeroBouton) {
    li[numeroBouton].addEventListener('click', function () {

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none'
            li[i].style.backgroundColor = '#d2d2d2'
        }
        sections[numeroBouton].style.display = 'block'
        li[numeroBouton].style.backgroundColor = 'darkgrey'
    })

}

for (let x = 0; x < sections.length; x++) {
    clickBouton(x)
}

let textEtudes = "<b>Parcours & Diplômes</b> <br><br><ul><li>Brevet: mention <i>très bien</i></li><li>Baccalauréat: en préparation</li></ul><br><ul><li>Natation: 200m et formation au sauvetage</li><li>Permis de conduire: en préparation</li><li>Certification d'anglais euro: niveau B1</li></ul>"

let textContact = "<b>Comment me contacter ?</b><br><br> <ul><li>☎<br>Téléphone : <a href='tel:06.05.33.05.44'>06.05.33.05.44</a><br><br></li><li>💻<br>Email : <a href='mailto:thibautbourgeais@yahoo.com'>thibautbourgeais@yahoo.com</a><br><br></li><li>✉<br>Courrier : <a href='https://www.google.com/maps/place/50%C2%B011'19.2%22N+3%C2%B022'35.5%22E/@50.1886711,3.3743284,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d50.1886711!4d3.3765171' target='_blank'>61 avenue Jules Guesde, Avesnes les Aubert</a></li></ul><br><br><br><br><br>"

let textLoisirs = "Mes loisirs"
let mediaType = null

function redacteur(category, text, textColor, textTaille, textPosition, textFond, textWidht, textHeight) {
    category.innerHTML = text
    category.style.color = textColor
    category.style.fontSize = textTaille
    category.style.textAlign = textPosition
    category.style.backgroundImage = `url(${textFond})`
    category.style.width = textWidht
    category.style.height = textHeight
    category.style.padding = "10px"
    category.style.borderRadius = "20px"
    category.style.fontFamily = "classico"
    category.style.backgroundSize = "cover"
}

redacteur(contact, textContact, "black", "30px", "center", "../medias/etudes.png", "700px", "300px")

redacteur(etudes, textEtudes, "6b6b6b", "30px", "center", "../medias/plans.jpg", "700px", "300px")

redacteur(loisirs, textLoisirs, "black", "30px", "center", "../medias/arduino.jpg", "1280px", "720px")