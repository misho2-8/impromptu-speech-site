//    creat a array[words] for random words in the object[library] >>>>>>

const library = {
    words:["Apple", "Bread", "Water", "Chair", "Table", "House", "Road", "Rain", "Sun", "Dog",
  "Cat", "Bird", "Tree", "Flower", "Book", "Pen", "Bag", "Shirt", "Shoe", "Door",
  "Window", "Phone", "Clock", "Lamp", "Bed", "Key", "Box", "Paper", "Cup", "Bowl",
  "Salt", "Milk", "Rice", "Meat", "Fish", "Egg", "Cake", "Soap", "Ball", "Game",
  "Hand", "Foot", "Face", "Head", "Eye", "Ear", "Arm", "Leg", "Smile", "Laugh",
  "Run", "Walk", "Jump", "Sit", "Stand", "Eat", "Drink", "Talk", "Sing", "Play",
  "Hot", "Cold", "Big", "Small", "Fast", "Slow", "Hard", "Soft", "New", "Old",
  "Red", "Blue", "Green", "White", "Black", "Gold", "Farm", "River", "Lake", "Hill",
  "Rock", "Sand", "Wind", "Snow", "Fire", "Boat", "Car", "Bike", "Plane", "Train",
  "City", "Town", "Shop", "Park", "Wall", "Floor", "Roof", "Bank", "Milk", "Star"]
}

// add the basic variables >>>>>

let timerid = null ; 
let timeleft = 60 ; 
let isRunning = false ;
let conut = null ; 

// get the elemnts from HTML  file >>>>

const timerdisplay = document.getElementById('timer')
const startbtn = document.getElementById('start')
const restartbtn = document.querySelectorAll('button')[1]

//  show random text function >>>>

function showrandomword() {
    let randomindex = Math.floor(Math.random() * library.words.length )
    let word = library.words[randomindex] ;
    document.querySelector('h1').innerText = word ; 
}

// start timer function >>>>

function starttimer() {
    if(isRunning) return ; 

    conut++
    isRunning = true ; 
    startbtn.innerText = 'Stop' 
    
    if(conut == 1 ) {
        showrandomword()
    }

    timerid = setInterval(() => {
        timeleft-- 
        timerdisplay.innerText = timeleft ; 

        if(timeleft == 0 ) {
            alert('time is out')
            stoptimer()
            showrandomword()
        }
    }, 1000);
} 

//  stop timer function >>>>

function stoptimer() {
    clearInterval(timerid) ; 
    startbtn.innerText = 'Start' ; 
    isRunning = false ; 

}

//  start button event >>>>>

startbtn.addEventListener('click' , (() => {
    if(isRunning == true) {
        stoptimer()
    } else {
        starttimer()
        return ;
    }
}))

//  restart button event

restartbtn.addEventListener('click' , () => {
    startbtn.innerText = 'Start' ; 
    timeleft = 60 ;
    timerdisplay.innerText = timeleft
    document.querySelector('h1').innerText = 'TALK WITH ME ' ; 
    stoptimer()
    conut = null 
})


