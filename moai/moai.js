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
        "url": "https://fragcat-d376.restdb.io/rest/users",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "655e177188709e88598b41ad",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

function smallgui() {
    console.log("smalled");
}

function backbutton() {
    location.replace("/");
}