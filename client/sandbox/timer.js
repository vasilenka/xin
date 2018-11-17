let minutes = 0;

function incrementSeconds() {
    minutes += 2;
    console.log(minutes);
}

let cancel = setInterval(incrementSeconds, 2000);
