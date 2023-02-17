// const Regex =(str) =>{
//     const regexName = /^[A-Z]/
//     console.log(regexName.test(str),'first')
    
// }
//     console.log(str('Jamiyansuren'))
const regexName = /^[A-Z]/
const personName = 'jamiyansuren'
const nickName = 'Jamiyansuren'

    console.log(regexName.test(personName),'first')
    console.log(regexName.test(nickName),'second')


const zipCodeChi = '60008'
const zipCodeRan = '6000234'
const regexZip = /^\d{5}$/
console.log(regexZip.test(zipCodeChi),'chicago')
console.log(regexZip.test(zipCodeRan), 'random')

const hexColorThree = '#fff'
const hexColorSix = '#999999'
const hexColorWrong = '#fff99'
const regexHexColor = /^#\w{3}|\w{6}$/
// const regexHexColor = /'^#([a-zA-Z0-9]{3} | [a-zA-Z0-9]{6})$'/


console.log(regexHexColor.test(hexColorThree), 'three')
console.log(regexHexColor.test(hexColorSix), 'six')
console.log(regexHexColor.test(hexColorWrong), 'wrong')