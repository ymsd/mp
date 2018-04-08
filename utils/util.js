
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const ext = {
  //项目自带方法 后期会删除
  formatTime: formatTime,
  // 浮点数相除
  floatAccDiv : function (arg1, arg2) {
    let t1 = 0, t2 = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      t1 = s1.split(".")[1].length;
    } catch (e) {}
    try {
      t2 = s2.split(".")[1].length;
    } catch (e) {}
    return (Number(s1.replace(".", "")) / Number(s2.replace(".", ""))) * Math.pow(10, t2 - t1);
  },
  // 浮点数相乘
  floatAccMul : function (arg1, arg2) {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  // 浮点数加法
  floatAccAdd : function (arg1, arg2) {
    let r1 = 0, r2 = 0, m, c, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      r1 = s1.split(".")[1].length;
    } catch (e) {}
    try {
      r2 = s2.split(".")[1].length;
    } catch (e) {}
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    arg1 = Number(s1.replace(".", ""));
    arg2 = Number(s2.replace(".", ""));
    if (c > 0) {
      let cm = Math.pow(10, c);
      if (r1 > r2) {
        arg2 = Number(s2.replace(".", "")) * cm;
      } else {
        arg1 = Number(s1.replace(".", "")) * cm;
      }
    }
    return (arg1 + arg2) / m;
  },
  // 浮点数减法
  floatAccSub : function (arg1, arg2) {
    let r1 = 0, r2 = 0, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
  },
}

module.exports = ext;
