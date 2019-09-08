// loop over each section, get the image and replace it with a canvas
const sections = document.querySelectorAll('section.pixi-text')

sections.forEach(section =>{
  	const originalImage = section.querySelector('img')
    const originalImageSource = originalImage.getAttribute('src')
    
		section.innerHTML = ""
  
  //set up a pixi application
  
  const app = new PIXI.Application({
    width: 1100,
    height: 800,
    transparent: true
  })
  
  // add the pixi application to the section tag
  section.appendChild(app.view)
  
  
  // make a new image
  let image = null
  let displacementImage = null
  let rgbFilter = new PIXI.filters.RGBSplitFilter([0,0], [0, 0], [0, 0])
  
  
  
  // make a new loader
  const loader = new PIXI.loaders.Loader()
  
//   add in our image
  loader.add('image', originalImageSource)
  loader.add('displacement', 'displacement1.jpg')
  loader.load((loader, resources) =>{
    // once the image has loaded, now we do things with it
    // new sprite is where we bring the image back and render it within our canvas
    image = new PIXI.Sprite(resources.image.texture)
    displacementImage = new PIXI.Sprite(resources.displacement.texture)
    
    image.x = 100 + 450
    image.y = 100 + 300
    image.width= 900
    image.height = 600
    image.interactive = true
    image.anchor.x = 0.5
    image.anchor.y = 0.5
    
    displacementImage.width = 1000
    displacementImage.height = 1000
    displacementImage.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    image.filters = [
      new PIXI.filters.DisplacementFilter(displacementImage, 100),
      rgbFilter
    ]
    
    // add the image to the app
    app.stage.addChild(image)
    app.stage.addChild(displacementImage)
    
    
//     here we add movement
    app.ticker.add(()=>{
      displacementImage.x = displacementImage.x + 1
      displacementImage.y = displacementImage.y + 1
    })

  })
  
  let currentX = 0
  let aimX = 0
  let currentY = 0
  let aimY = 0
  
  section.addEventListener('mousemove', (event)=>{
    	aimX = event.pageX
    	aimY = event.pageY
    	displacementImage.y = event.pageY
  })
  
  const animate = function(){
    const diffX = aimX - currentX
    const diffY = aimY - currentY
    
    currentX = currentX + (diffX * 0.05)
    currentY = currentY + (diffY * 0.05)
    
    // if there is a displacement image loaded, begin to move it
    if(image){
       		displacementImage.x = currentX
      		displacementImage.y = displacementImage.y + 1 + (diffY * 0.02)
      
      
      		rgbFilter.red = [diffX * .1, 0]
      		rgbFilter.green = [0, diffY * .1]
      		rgbFilter.blue = [0, diffY * .1]
       }
    
    requestAnimationFrame(animate)
  }
  
  animate()
  
  
})









