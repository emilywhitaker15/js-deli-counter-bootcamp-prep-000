var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = parseInt(katzDeliLine.indexOf(name))
  number++
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    while ()
  } 
  else {
    return "There is nobody waiting to be served!"
  }
}