function dateDiff (timestamp) {
  const dateTimeStamp = parseInt(new Date(timestamp).getTime());
  const now = parseInt(new Date().getTime());
  const number = now - dateTimeStamp;

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  // 计算差异时间的量级
  const _year = number / year;
  const _month = number / month;
  const _week = number / (7 * day);
  const _day = number / day;
  const _hour = number / hour;
  const _min = number / minute;

  if (_year >= 1) {
    return parseInt(_year) + '年前';
  } else if(_month >= 1) {
    return parseInt(_month) + '个月前';
  } else if(_week >= 1) {
    return parseInt(_week) + '周前';
  } else if(_day >= 1) {
    return parseInt(_day) +'天前';
  } else if(_hour >= 1) {
    return parseInt(_hour) + '个小时前';
  } else if(_min >= 1) {
    return parseInt(_min) + '分钟前';
  } else {
    return '刚刚'
  }
}

// 检索关键字
function sreachIndexOF (keywolds, title) {
  const reg = new RegExp('(' + keywolds + ')', 'ig');
  const div = title.replace(reg, '<i class="kw">'+ keywolds + '</i>');
  return div;
}

module.exports = {
  dateDiff,
  sreachIndexOF
}