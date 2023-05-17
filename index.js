let sounds = [
    {
        audioclip: "audio/01.mp3",
        link: "https://blah.net",
        linktext: ""
    },

    {
        audioclip: "audio/02.mp3",
        link: "",
        linktext: ""
    },
    {
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



    let audioclip = document.createElement('audio');
    audioclip.src = sounds[counter].audioclip;
    audioclip.className = '';
    //audioclip.src = sounds[diffDays];
    audioclip.controls = true;

    let audiolink = document.createElement('a');
    audiolink.href = sounds[diffDays].link;
    audiolink.className = '';
    audiolink.innerHTML = sounds[counter].linktext;
    console.log(sounds[counter].link);




    document.body.appendChild(audioclip);
    document.body.appendChild(audiolink);

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