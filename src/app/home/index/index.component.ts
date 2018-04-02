import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public timeLine = [
    {'time': {'date': '2018-3-29', times: '12:00:00'}, 'title': 'init', 'info': 'init'},
    {'time': {'date': '2018-3-29', times: '15:25:36'}, 'title': '添加时间范围控件', 'info': '基于bootstrap-daterangepicker.js写的时间范围控件。'},
    {'time': {'date': '2018-3-29', times: '16:46:45'}, 'title': '添加表格', 'info': '基于ngx-datatable写的表格。'},
    {'time': {'date': '2018-4-02', times: '14:43:55'}, 'title': '添加富文本编辑器', 'info': '基于ng2-ckeditor写的富文本编辑器。'},
    {'time': {'date': '2018-4-02', times: '15:44:55'}, 'title': '添加表格行内样式', 'info': '实现表格的行内更改数据。'}
    ];

  constructor() {
  }

  ngOnInit() {
  }
}
