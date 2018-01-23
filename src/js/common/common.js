
function isPC () {
  let flag = true
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    flag = false
  }
  return flag
}

export {isPC}
