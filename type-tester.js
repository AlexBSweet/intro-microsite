
const leadingTag = document.querySelector('input[name="leading"]')
const typeSize = document.querySelector('input[name="typesize"]')
const slantTag = document.querySelector('input[name="slant"]')
const weightTag = document.querySelector('input[name="weight"]')
const outputTag = document.querySelector('div.type-output')
const trackingTag = document.querySelector('input[name="tracking"]')


trackingTag.addEventListener('input', function(){
    outputTag.style.letterSpacing = this.value + 'em'
   
})

leadingTag.addEventListener('input', function(){
    outputTag.style.lineHeight = this.value
})


slantTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
})



weightTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
})




typeSize.addEventListener('input', function(){
        outputTag.style.fontSize = this.value + 'px'
})