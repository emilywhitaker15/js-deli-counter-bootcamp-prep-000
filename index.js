var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = parseInt(katzDeliLine.indexOf(name))
  number++
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`
    return array
  } 
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  var line = "The line is currently:"
  var i = 0
  if (array.shift() !== undefined) {
    for (i = 0; i < array.length; i++) {
    line = line + ` ${(parseInt(i) + 1)}. ${array[i]}`
    return line
    }
  }
  else {
    return "The line is currently empty."
  }
}