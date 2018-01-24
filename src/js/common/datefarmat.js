import fecha from 'fecha'

const formatMasks = {
  default: 'YYYY年MM月DD日，HH:mm',
  YMD: 'YYYY年MM月DD日'
}

/**
 *
 * @param date 需要格式化的时间对象
 * @param formatMask 格式模板
 * @returns {*}
 */
function dateFormat (date, formatMask) {
//  转换为中国时区的时间戳
  let timestamp = Number(date) - 8 * 3600 * 1000
  let dateGMT = new Date()
  dateGMT.setTime(timestamp)
  return fecha.format(dateGMT, formatMask)
}

export {dateFormat, formatMasks}
