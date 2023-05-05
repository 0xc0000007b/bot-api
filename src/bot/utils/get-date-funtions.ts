export class GetDateFunctions {
  data: Date = new Date();
  getDays(date: Date) {
    const day = date.getDate();
    return day < 10 ? '0' + day : day;
  }
  getMoths(date: Date) {
    const month = date.getUTCMonth() + 1;
    return month < 10 ? '0' + month : month;
  }

  getYears(date: Date) {
    return date.getUTCFullYear() < 10
      ? '0' + date.getUTCFullYear()
      : date.getUTCFullYear();
  }

  getDate() {
    return `${this.getDays(this.data)}.${this.getMoths(
      this.data,
    )}.${this.getYears(this.data)}`;
  }

  getTime() {
    return `${this.getHours(this.data)}:${this.getMinutes(this.data)}`;
  }
  getHours(date: Date) {
    const hour = date.getHours();
    return hour < 10 ? '0' + hour : hour;
  }
  getMinutes(date: Date) {
    const minutes = date.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes;
  }
}

const util = new GetDateFunctions();
export const time: string = util.getTime();
export const date: string = util.getDate();
