
let number = 0;
document.getElementById('start').addEventListener('click',function(){
    document.getElementById('spinner').classList.remove('hidden');
    timer()
})
document.getElementById('stop').addEventListener('click',function(){
    document.getElementById('spinner').classList.add('hidden');
    clearInterval(intervalId)
    
})
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('number').innerText = '';
    number = 0;
    clearInterval(intervalId)
    document.getElementById('spinner').classList.add('hidden');
    

})
function timer() {
    intervalId = setInterval(() => {
        number++
        let numberField = document.getElementById('number');
        numberField.innerText = number
    }, 1000);
    
}
