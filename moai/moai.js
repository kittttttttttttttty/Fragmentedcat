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
      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("GET", "https://fragcat-d376.restdb.io/rest/users");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "655e177188709e88598b41ad");
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
}

function smallgui() {
    console.log("smalled");
}

function backbutton() {
    location.replace("/");
}