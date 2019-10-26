export function timeReady(hourTime) {
  if (typeof hourTime === "number" && hourTime > 0 && hourTime <= 24) {
    if (hourTime < 10) {
      this.dateNumber_build = this.dateNumber_review + 0 + hourTime;
      // this.selectHour = '0' + hourTime + ":00"
    } else {
      this.dateNumber_build = this.dateNumber_review + hourTime;
      // this.selectHour = hourTime+":00"
    }
    this.selectHour = hourTime;
    // console.log(this.selectHour)
    this.isTimeReady = false;
  } else {
    this.isTimeReady = true;
  }
}
