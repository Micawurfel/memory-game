const cards = [
    {
        animal: "ave",
        img: "media/1.jpg",
    },
    {
        animal: "ave",
        img: "media/1.jpg",
    },
    {
        animal: "cerdo",
        img: "media/2.jpg",
    },
    {
        animal: "cerdo",
        img: "media/2.jpg",
    },
    {
        animal: "koala",
        img: "media/3.jpg",
    },
    {
        animal: "koala",
        img: "media/3.jpg",
    },
    {
        animal: "leon",
        img: "media/4.jpg",
    },
    {
        animal: "leon",
        img: "media/4.jpg",
    },
    {
        animal: "leopardo",
        img: "media/5.jpg",
    },
    {
        animal: "leopardo",
        img: "media/5.jpg",
    },
    {
        animal: "tortuga",
        img: "media/6.jpg",
    },
    {
        animal: "tortuga",
        img: "media/6.jpg",
    },
    {
        animal: "mono",
        img: "media/7.jpg",
    },
    {
        animal: "mono",
        img: "media/7.jpg",
    },
    {
        animal: "vaca",
        img: "media/8.jpg",
    },
    {
        animal: "vaca",
        img: "media/8.jpg",
    },
]

let grid = document.querySelector('.grid')
let score = document.querySelector('.score')
let time = document.querySelector('.time')

let cardChosen = []
let cardChosenId = []
let cardsWon = []


cards.sort (()=> Math.random() - 0.5 );

console.log(cards)

//create the board
function createBoard(){
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement ('img');
        card.setAttribute('src', 'media/back.jpg');
        card.setAttribute('data-id', i);
        grid.appendChild(card);

        // flip card
        card.onclick = () => {
            const cardID = card.getAttribute('data-id');
            cardChosen.push(cards[cardID].animal);
            cardChosenId.push(cardID);
            card.setAttribute('src', cards[cardID].img);

            if (cardChosen.length === 2) {
                setTimeout (checkForMatch, 500)
            }

            console.log(cardID)
            console.log(cardChosen)
            console.log(cardChosenId)
        }
    }    
}

//check for matches

function checkForMatch() {

    let card = document.querySelectorAll('img');
    const firstCard = cardChosenId[0];
    const secondCard = cardChosenId[1];

    if (cardChosen[0].animal === cardChosen[1].animal){
        alert("Match");
        card[firstCard].setAttribute('src', "media/white.jpg");
        card[secondCard].setAttribute('src', "media/white.jpg");
        cardsWon.push(cardChosen);
        
    } else if (cardChosenId[0].animal != cardChosenId[1].animal){
        card[firstCard].setAttribute('src', "media/back.jpg");
        card[secondCard].setAttribute('src', "media/back.jpg");
        alert ("try again");
    } else {
        alert("error")
    }

    cardChosen = [];
    cardChosenId = [];

    score.textContent = cardsWon.length;
    if (cardsWon.length === cards.length/2){
        score.textContent = "congratulations!"
    }
}

createBoard();