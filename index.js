
function calculateTax(income, expenses) {
  if (income<0 || expenses<0 || expenses > income) {
        return 'Invalid Input'
  }
   
  let save = income - expenses
  let tex = save * 0.2
  return tex
}





function sendNotification(email) {
  if(email.split('').indexOf('@') === -1){
    return 'Invalid Email'
  }
  let emailArr = email.split('@')
  let notification = `${emailArr[0]} sent you an email from ${emailArr[1]}`
  return notification;
}





function checkDigitsInName(name) {
 if(typeof name !== 'string'){
  return 'Invalid Input'
 }

  let nameArr = name.split('')
  for(let char of nameArr){
    if(!isNaN(char)){
      return true
    }
  }
  return false
}






function calculateFinalScore(obj) {
 if(typeof obj !== 'object' || Array.isArray(obj)){
   return 'Invalid Input'
 }
let totalScore = obj.testScore + obj.schoolGrade
if(obj.isFFamily){
  totalScore += 20
}

return totalScore >=80? true: false
}





function  waitingTime(waitingTimes  , serialNumber) {
 if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
  return 'Invalid Input'
 }

 let sum = 0
 for(time of waitingTimes){
  sum += time
 }
 let averageTime = Math.round(sum / waitingTimes.length)
 let personLeft = serialNumber - 1 - waitingTimes.length
 let waitingTime = averageTime * personLeft

 return waitingTime
}













