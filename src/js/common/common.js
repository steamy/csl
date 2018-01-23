
function deviceType () {
  let device = ''
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    device = 'Pc'
  } else if (/Android/i.test(navigator.userAgent)) {
    device = 'Android'
  } else if (/iPhone|iPod/i.test(navigator.userAgent)) {
    device = 'iOS'
  } else {
    device = 'others'
  }
  return device
}

export {deviceType}
