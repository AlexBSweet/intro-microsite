const counterOne = document.querySelector('input[name="counter-one"]')
const counterTwo = document.querySelector('input[name="counter-two"]')
const counterThree = document.querySelector('input[name="counter-three"]')

    anime({
        targets: '.counter-one',
        value: [0, 1000],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });

      anime({
        targets: '.counter-two',
        value: [0, 22],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });

      anime({
        targets: '.counter-three',
        value: [0, 48],
        round: 1,
        duration: 3000,
        easing: 'easeInOutExpo', 
        direction: 'normal', 
        loop: 'false',
        autoplay: 'false',
        delay: 2000
      });