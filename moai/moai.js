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
    fetch("https://fragcat-d376.restdb.io/rest/users", {
        headers: {
            "Accept": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => {
            ul.innerHTML = ''; // Clear the existing leaderboard before updating
            data.forEach(user => {
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
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
}

function smallgui() {
    console.log("smalled");
}

function backbutton() {
    location.replace("/");
}