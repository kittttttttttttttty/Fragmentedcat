function clicks() {
    console.log("clicked")
    const counter = document.querySelector('#clk'),
        count = +counter.innerHTML;
    counter.innerHTML = count + 1;
}
function resetss() {
    console.log("reseted")
    butto = document.getElementById('clk')
    butto.innerHTML = '';
}