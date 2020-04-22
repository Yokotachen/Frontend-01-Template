/*
0000 0000-0000 007F | 0xxxxxxx 
0000 0080-0000 07FF | 110xxxxx 10xxxxxx 
0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx 
0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx 
*/

function encodUtf8(str) {
  let encodeNum = str.codePointAt()

  if (encodeNum < 0x07f) {
    return encodeNum.toString(2).padStart(8, '0')
  } else if (encodeNum < 0x7ff) {
    return (
      ((encodeNum >> 6) | 0xc0).toString(2) + (encodeNum | 0x80).toString(2)
    )
  } else if (encodeNum < 0xffff) {
    return (
      ((encodeNum >> 12) | 0xe0).toString(2) +
      ((encodeNum >> 6) | 0x80).toString(2) +
      (encodeNum | 0x80).toString(2)
    )
  } else {
    return (
      ((encodeNum >> 18) | 0xf0).toString(2) +
      ((encodeNum >> 12) | 0xe0).toString(2) +
      ((encodeNum >> 6) | 0x80).toString(2) +
      (encodeNum | 0x80).toString(2)
    )
  }
}

function UTF8_Encoding(str) {
  return encodUtf8(str)
}
