let counter = 0;
let seconds = document.getElementById('secondOnes');
let centiSeconds = document.getElementById('msHundreds');
let milliSeconds = document.getElementById('msTens');
let timer = document.querySelector('.digits');


seconds.textContent = '0';
centiSeconds.textContent = '0';
milliSeconds.textContent = '0';


    function secondsTime (){
        counter++;
        seconds.textContent = counter;

        if (counter === 10){
            counter = -1;
            secondTens.remove();
            timer.style.color = "red";
        }
    }

    setInterval(secondsTime, 1000);

    // function centiSecondsTime (){
    //     counter++;
    //     centiSeconds.textContent = counter;

    //     if (counter >= 9) {
    //         counter = -1;
    //     }
    // }

    // setInterval(centiSecondsTime, 100);

    // function milliSecondsTime (){
    //     counter++;
    //     milliSeconds.textContent = counter;

    //     if (counter >= 9) {
    //         counter = -1;
    //     }
    // }
    
    // setInterval(milliSecondsTime, 10);
    
    