const typeTester = document.querySelector('section.type-tester')
const lineHeightTag = document.querySelector('input[name="leading"]')
const typeSize = document.querySelector('input[name="typesize"]')
const slantTag = document.querySelector('input[name="slant"]')
const weightTag = document.querySelector('input[name="weight"]')
const spacingTag = document.querySelector('input[name="tracking"]')
const outputTag = document.querySelector('div.type-output')

const typeSizeOutput = document.querySelector('.typesize-output')
const weightOutput = document.querySelector('.weight-output')
const slantOutput = document.querySelector('.slant-output')
const lineHeightOutput = document.querySelector('.line-height-output')
const spacingOutput = document.querySelector('.spacing-output')


// this resets the innerHTML on outputTag to be empty on first click only if the type says "Try Intro..."
outputTag.addEventListener('click', ()=>{
    
    if(outputTag.innerHTML.indexOf("Try Intro...") !== -1) {
        outputTag.innerHTML = ''
    }
})


spacingTag.addEventListener('input', function(){
    outputTag.style.letterSpacing = this.value + 'em'
    spacingOutput.innerHTML = this.value
})

lineHeightTag.addEventListener('input', function(){
    outputTag.style.lineHeight = this.value
    lineHeightOutput.innerHTML = this.value
})


slantTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    slantOutput.innerHTML = this.value
})



weightTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    weightOutput.innerHTML = this.value
})




typeSize.addEventListener('input', function(){
        outputTag.style.fontSize = this.value + 'px'
        typeSizeOutput.innerHTML = this.value + 'px'
})



const parLeft = document.querySelector('p.paragraph-left')
const parCenter = document.querySelector('p.paragraph-center')
const parRight = document.querySelector('p.paragraph-right')

parLeft.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'left'
})
parCenter.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'center'
})
parRight.addEventListener('click', ()=>{
    outputTag.style.textAlign = 'right'
})

const ipsumTag = document.querySelector('.ipsum')

ipsumTag.addEventListener('click', ()=>{
    outputTag.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    outputTag.style.fontSize = 60 + 'px'
    typeSize.value = 60
    typeSizeOutput.innerHTML = 60 + 'px'
    outputTag.style.lineHeight = 1.5
    lineHeightOutput.innerHTML = 1.5
    lineHeightTag.value = 1.5
    
})


const colorCircles = document.querySelector('.color-circles')
const blackCircle = document.querySelector('.black-circle')
const redCircle = document.querySelector('.red-circle')
const grayCircle = document.querySelector('.gray-circle')
const greenCircle = document.querySelector('.green-circle')

const rangeTags = document.querySelectorAll('input[type=range]')

blackCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = '#000'
    typeTester.style.color = '#fff'
    rangeTags.forEach(tag=>{
        tag.style.background = "#fff"
    })
})
redCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = '#fa5454'
    typeTester.style.color = '#fff'
    rangeTags.forEach(tag=>{
        tag.style.background = "#424242"
    })
})
grayCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = '#dedede'
    typeTester.style.color = '#000'
    rangeTags.forEach(tag=>{
        tag.style.background = "#424242"
    })
})
greenCircle.addEventListener('click', ()=>{
    typeTester.style.backgroundColor = '#0d3622'
    typeTester.style.color = '#fff'
    rangeTags.forEach(tag=>{
        tag.style.background = "#fff"
    })
})













