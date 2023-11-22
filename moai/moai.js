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
      
      xhr.open("GET", "https://fragcat-5d83a-default-rtdb.firebaseio.com/scores/scores.json");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "AIzaSyCD8jGlrZz4h3Zetjkv6jZrZt4BUYgggQw");
      xhr.setRequestHeader("cache-control", "no-cache");
      
      xhr.send(data);
}

function smallgui() {
    console.log("smalled");
}

function backbutton() {
    location.replace("/");
}