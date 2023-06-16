document.getElementById("moonimage").onclick = function () {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};


let sounds = [
    {
        title: "Day 1",
        // link: "https://blah.net",
        // linktext: "hello",
        audioclip: "audio/01.mp3",

    },

    {
        title: "Day 2",
        // link: "https://blah.net",
        // linktext: "hello",
        audioclip: "audio/02.mp3",
    },
    {
        title: "Day 3",
        audioclip: "audio/03.mp3",
        link: "https://blah.net",
        linktext: "audio#3"
    },

    {
        audioclip: "audio/04.mp3",
        link: "",
        linktext: ""
    },

    {
        audioclip: "audio/05.mp3",
        link: "https://blah.net",
        linktext: "audio#5"
    },

    {
        audioclip: "audio/06.mp3",
        link: "",
        linktext: ""
    },
]


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let dateToday = `${year}, ${month}, ${day}`;

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const startDate = new Date(2023, 4, 16,);
const currentDate = new Date(dateToday);

const diffDays = Math.round(Math.abs((startDate - currentDate) / oneDay));
//const elapsedDays = Math.round(Math.abs((startDate - currentDate) / oneDay));

// document.getElementById('daysElapsed').innerHTML = "time elapsed since start date: " + diffDays;
// document.getElementById('startDate').innerHTML = "the date we count from: " + startDate;
// document.getElementById('currentDay').innerHTML = "today's date is: " + currentDate;
// document.getElementById('dateToday').innerHTML = "today's date in comma format: " + dateToday;

let counter = 0;
function addAudio() {


    let audiotitle = document.createElement('h3');
    audiotitle.innerHTML = sounds[counter].title;


    // let audiolink = document.createElement('a');

    // audiolink.href = sounds[diffDays].link;
    // audiolink.className = '';
    // audiolink.innerHTML = sounds[counter].linktext;

    let audioclip = document.createElement('audio');
    audioclip.src = sounds[counter].audioclip;
    audioclip.className = '';
    //audioclip.src = sounds[diffDays];
    audioclip.controls = true;



    console.log(sounds[counter].link);


    // document.body.appendChild(audiotitle);
    // document.body.appendChild(audiolink);
    // document.body.appendChild(audioclip);


    counter++;
    console.log(diffDays)
    console.log(counter);
}

addAudio();


// setInterval(addAudio, 10000);

/*console.log(startDate);
console.log(currentDate);
console.log(dateToday);
console.log(month)*/