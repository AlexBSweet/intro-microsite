const startButton = document.querySelector('#start-button')




startButton.addEventListener('click', function(){
    var c = new CountUp('styles',0,100)
    c.start()
})