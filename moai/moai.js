const { data } = require("jquery");

let result = await fetch(request);





function clicks() {
    console.log("clicked")
    const counter = document.querySelector('#clk'),
        count = +counter.innerHTML;
    if (counter.innerHTML == 'Click') {
        counter.innerHTML = 1;
    } else {
        counter.innerHTML = count + 1;
    }

}
function resetss() {
    console.log("reseted")
    butto = document.getElementById('clk')
    butto.innerHTML = 'Click';
}
function updatelead() {
    fetch("https://fragcat-d376.restdb.io/rest/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let leaderboardd = data;

            leaderboardd.map(function(leaderboardd) {
                let li = document.createElement('li');
                let name = document.createElement('h2');
                let score = document.createElement('span');

                name.innerHTML = `${leaderboardd.name}`
                score.innerHTML = `${leaderboardd.score}`

                li.appendChild(name);
                li.appendChild(score);
                list.appendChild(li);
            });
        })
    ul.appendChild(list);
}
function smallgui() {
    console.log("smalled")
}
function backbutton() {
    location.replace("/")
}