function convertStrToNum(string) {
  let dotAfterLen = 0
  if (string.length !== string.split('.')[0].length) {
    dotAfterLen = string.split('.')[1].length
  }

  let chars = string.split('')
  let resNumber = 0

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '.') {
      continue
    }
    resNumber = resNumber * 10
    resNumber += chars[i].codePointAt(0) - '0'.codePointAt(0)
  }

  return resNumber / 10 ** dotAfterLen
}
