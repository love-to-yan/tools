/**
 *
 * @param date 如果传入参数返回传入日期是周几，没有传入参数，返回当前周期
 * @returns {string} 返回一周中的周几
 *
 */
function getWeek(...date) {
    let myDate;
    if(date.length>0){
        myDate=new Date(date[0]);
    }else {
        myDate=new Date();
    }
    let Week="";
    switch (myDate.getDay()){
        case 0:Week="周日";break;
        case 1:Week="周一";break;
        case 2:Week="周二";break;
        case 3:Week="周三";break;
        case 4:Week="周四";break;
        case 5:Week="周五";break;
        case 6:Week="周六";break;
        default:break;
    }
    // 手动销毁myDate
    myDate=null;
    return Week
}