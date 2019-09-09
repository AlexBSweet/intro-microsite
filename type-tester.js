

const typeSize = document.querySelector('input[name="typesize"]')
const slantTag = document.querySelector('input[name="slant"]')
const weightTag = document.querySelector('input[name="weight"]')
const outputTag = document.querySelector('div.type-output')




slantTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    console.log(weight, slant)
})



weightTag.addEventListener('input', function(){
    const weight = weightTag.value
    const slant = slantTag.value
    outputTag.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    console.log(weight, slant)
})




typeSize.addEventListener('input', function(){
        outputTag.style.fontSize = this.value + 'px'
        console.log(this.value)
})