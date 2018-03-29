import {Injectable} from '@angular/core';

@Injectable()
export class DaterangepickerService {

  constructor() {
  }

  public dateRangePicker(id: string, callback: any) {
    const picker: any = $('#' + id);
    const dataRageOption: Object = {
      'timePicker': true,
      'timePicker24Hour': true,
      'drops': 'down',
      'locale': {
        'format': 'YYYY/MM/DD HH:mm:ss',
        'separator': ' - ',
        'applyLabel': '确定',
        'cancelLabel': '取消',
        'fromLabel': 'From',
        'toLabel': 'To',
        'customRangeLabel': 'Custom',
        'daysOfWeek': ['日', '一', '二', '三', '四', '五', '六'],
        'monthNames': ['一月', '二月', '三月', '四月', '五月', '六月', '7月', '八月', '九月', '十月', '十一月', '十二月'],
        'firstDay': 1,
        'minDays': 0,
        'maxDays': 0
      },
      'startDate': moment().startOf('days'),
      'endDate': moment()
    };
    picker.daterangepicker(dataRageOption, function (start, end) {
      callback({start: start.format('YYYY/MM/DD HH:mm:ss'), end: end.format('YYYY/MM/DD HH:mm:ss')});
    });
  }
}
