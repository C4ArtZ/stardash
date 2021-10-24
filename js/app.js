let greetingUsername = "Chris";


window.onload = displayClock();
// window.onload = loadOptions();
window.onload = displayGreeting(greetingUsername);

function displayClock() {


    const date = new Date();
    const minutes = (mins = ('0' + date.getMinutes()).slice(-2));
    const hours = date.getHours();
    const seconds = (secs = ('0' + date.getSeconds()).slice(-2));
    const separator = ':'

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();


    const current_date = day + "." + month + "." + year;
    const time = hours + separator + minutes + separator + seconds;

    document.getElementById('time').innerText = time;
    // document.getElementById('date').innerText = current_date;


    setTimeout(displayClock, 1000);
}

function displayGreeting(name) {
    const currentHour = new Date().getHours();
    // const currentHour = 8;
    let partOfDay = "day";
    if (currentHour >= 6 && currentHour <= 11){
        partOfDay = "morning";
    }
    else if (currentHour >= 13 && currentHour <= 17){
        partOfDay = "afternoon";
    }
    else if (currentHour >= 18 && currentHour <= 20){
        partOfDay = "evening";
    }
    else if ((currentHour >= 21 && currentHour <= 24) || (currentHour >= 0 && currentHour <= 5)){
        partOfDay = "night";
    }

    document.querySelector('#greeting').innerHTML = `Good ${partOfDay}, ${name}!`;
}

async function loadOptions () {
    const name = await getLocalStorageValue("username");
    displayGreeting(name);
}

async function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value.username);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
}