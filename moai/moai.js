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
function biggui() {
    console.log("bigged")
}
function smallgui() {
    console.log("smalled")
}
function backbutton() {
    location.replace("/")
}