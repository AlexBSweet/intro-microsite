
// INTRO GRID SECTION

const introGrid = document.querySelector('section.intro-grid')
const introDivs = introGrid.querySelectorAll('div')

introGrid.addEventListener('mousemove', (event)=>{
  
  const x = event.pageX
  const y = event.pageY
  
  introDivs.forEach(div=>{
    
    var rect = div.getBoundingClientRect();
    var imgX = rect.left + 20
    var imgY = rect.top 
    
    var diffX = x-imgX
    var diffY = y-imgY
    
    var radians = Math.atan2(diffY, diffX)
    var angle = radians * 180 / Math.PI
    
    div.style.transform = `rotate(${angle}deg)`
    
  })
})

const colors = [
  'red',
  'orange', 
  'yellow', 
  'lavender', 
  'yellowgreen', 
  'lightblue'
]

let color = 0
introDivs.forEach(div=>{
  div.addEventListener('mouseover', ()=>{
    color = color +1
    if(color>colors.length){
      color=0
    }
    div.style.color= colors[color]

    setTimeout(function(){
      div.style.color = '#8c8c8c'
    }, 10000)
  })
})









// COUNTING ANIIMATION SECTION

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


      // CHARACTER VIEWER SECTION
      
      const characterViewSection = document.querySelector('section.character-viewer')
      const characterContainer = document.querySelector('div.character-container')
      const gridContainer = document.querySelector('section.grid-container')
      const characters = gridContainer.querySelectorAll('div')
      const characterCursor = document.querySelector('div.character-cursor')

      characterViewSection.addEventListener('mouseenter', ()=>{
        characterCursor.style.visibility = 'visible'
        characterContainer.style.visibility = 'visible'
      })

      characterViewSection.addEventListener('mouseleave', ()=>{
        characterCursor.style.visibility = 'hidden'
        characterContainer.style.visibility = 'hidden'
      })

      characterViewSection.addEventListener('mousemove', (e)=>{
          const X = e.pageX
          const Y = e.pageY
          
          characterCursor.style.left = X + 'px'
          characterCursor.style.top = Y + 'px'
          characterContainer.style.left = X + 'px'
          characterContainer.style.top = Y + 'px'
      })

      

      characters.forEach(div=>{
          const character = div.innerHTML

          div.addEventListener('mouseenter', function (){
            
            
            characterContainer.innerHTML = character
          })
      })
      
 

    // DRAGGABLE SECTION

    // const draggableDiv = document.querySelector('div.draggable')
    // const draggableSection = document.querySelector('section.draggable-section')

    // var dragItem = document.querySelector("#item");
    // var container = document.querySelector("#container");

    // var active = false;
    // var currentX;
    // var currentY;
    // var initialX;
    // var initialY;
    // var xOffset = 0;
    // var yOffset = 0;

    // container.addEventListener("touchstart", dragStart, false);
    // container.addEventListener("touchend", dragEnd, false);
    // container.addEventListener("touchmove", drag, false);

    // container.addEventListener("mousedown", dragStart, false);
    // container.addEventListener("mouseup", dragEnd, false);
    // container.addEventListener("mousemove", drag, false);

    // // clientX and clientY output the coordinates of the mouse when pressed
    // function dragStart(e) {
    //   if (e.type === "touchstart") {
    //     initialX = e.touches[0].clientX - xOffset;
    //     initialY = e.touches[0].clientY - yOffset;
    //   } else {
    //     initialX = e.clientX - xOffset;
    //     initialY = e.clientY - yOffset;
    //   }

    //   if (e.target === dragItem) {
    //     active = true;
    //   }
    // }

    // function dragEnd(e) {
    //   initialX = currentX;
    //   initialY = currentY;

    //   active = false;
    // }

    // function drag(e) {
    //   if (active) {
      
    //     e.preventDefault();
      
    //     if (e.type === "touchmove") {
    //       currentX = e.touches[0].clientX - initialX;
    //       currentY = e.touches[0].clientY - initialY;
    //     } else {
    //       currentX = e.clientX - initialX;
    //       currentY = e.clientY - initialY;
    //     }

    //     xOffset = currentX;
    //     yOffset = currentY;

    //     setTranslate(currentX, currentY, dragItem);
    //   }
    // }

    // function setTranslate(xPos, yPos, el) {
    //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }






// DOWNLOAD SECTION

const downloadSection = document.querySelector('section.download')
const downloadCircleMain = downloadSection.querySelector('div.download-circle-main')
const hoverCirclesDown = document.querySelectorAll('div.hover-circle-down')
const hoverCirclesUp = document.querySelectorAll('div.hover-circle-up')

downloadCircleMain.addEventListener('mouseover', ()=>{

    hoverCirclesDown.forEach(circle=>{
      const x = (Math.random() *80)
      const y = (Math.random() *80)

      console.log(x,y)  

      circle.style.transform = `translate(${x}px, ${y}px)`
      circle.style.opacity = 1
    })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
    hoverCirclesDown.forEach(circle=>{
      circle.style.transform = 'translate(0, 0)'
      circle.style.opacity = 0
    })
})

downloadCircleMain.addEventListener('mouseover', ()=>{

  hoverCirclesUp.forEach(circle=>{
    const x = -(Math.random() *80)
    const y = -(Math.random() *80)

    console.log(x,y)  

    circle.style.transform = `translate(${x}px, ${y}px)`
    circle.style.opacity = 1
  })
})

downloadCircleMain.addEventListener('mouseout', ()=>{
  hoverCirclesUp.forEach(circle=>{
    circle.style.transform = 'translate(0, 0)'
    circle.style.opacity = 0
  })
})
