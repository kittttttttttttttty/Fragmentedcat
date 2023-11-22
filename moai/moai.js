const ul = document.getElementById('leaderboards');
const list = document.createDocumentFragment();

function clicks() {
    console.log("clicked");
    const counter = document.querySelector('#clk'),
        count = +counter.innerHTML;
    if (counter.innerHTML == 'Click') {
        counter.innerHTML = 1;
    } else {
        counter.innerHTML = count + 1;
    }
}

function resetss() {
    console.log("reseted");
    const butto = document.getElementById('clk');
    butto.innerHTML = 'Click';
}

function updatelead() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fragcat-d376.restdb.io/rest/users", // Replace with your actual server endpoint
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "authorization": "Bearer 655e177188709e88598b41ad", // Replace with your actual JWT or Access Token
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        ul.innerHTML = ''; // Clear the existing leaderboard before updating
        response.forEach(function (user) {
            const li = document.createElement('li');
            const name = document.createElement('h2');
            const score = document.createElement('span');

            name.innerHTML = `${user.user}`;
            score.innerHTML = `${user.num}`;

            li.appendChild(name);
            li.appendChild(score);
            list.appendChild(li);
        });
        ul.appendChild(list);
    });
}

function smallgui() {
    console.log("smalled");
}

function backbutton() {
    location.replace("/");
}