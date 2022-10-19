const myInfo = {
  name: 'jack',
  phoneNumber: '123456',
  'samsung product': {
    buds: 'Buds pro',
    galaxy: 'S99',
  },
}

// console.log(myInfo.name)
// console.log(myInfo['name'])
// console.log(myInfo['samsung product']['galaxy'])

// const key = 'ssafy'
// const value = ['한국', '미국', '일본', '중국']

// const myObj = {
//     [key]:value,
// }
// console.log(myObj)
// console.log(myObj.ssafy)

const jsonData = {
    coffee: 'Americano',
    iceCream: 'Mint Choco',
  }

// object => json
const objToJson = JSON.stringify(jsonData)
console.log(objToJson)