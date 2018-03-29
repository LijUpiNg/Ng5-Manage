import { Component, OnInit} from '@angular/core';
import { DaterangepickerService } from '../../../shared/components/daterangepicker/range/daterangepicker.service';
@Component({
  selector: 'app-index',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  constructor(private daterangepickerService: DaterangepickerService) {
  }

  ngOnInit() {
    this.daterangepickerService.dateRangePicker('startEndTime', date => { console.log(date); });
  }

  public reset(): void {
    this.daterangepickerService.dateRangePicker('startEndTime', date => { console.log('日期重置成功'); });
  }

}
