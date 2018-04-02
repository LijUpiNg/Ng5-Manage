import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableService } from '../../../shared/manage-service/table.service';
import { DataTable2Modal } from '../../../shared/modal/data-table2.modal';
@Component({
  selector: 'app-index',
  templateUrl: './data-table-inline.component.html',
  styleUrls: ['./data-table-inline.component.scss'],
  providers: [TableService, DataTable2Modal]
})

export class DataTableInlineComponent implements OnInit {

  @ViewChild('template_op') protected template_op: TemplateRef<any>;
  @ViewChild('template_fandian') protected template_fandian: TemplateRef<any>;
  @ViewChild('template_usercount') protected template_usercount: TemplateRef<any>;

  public list_rows: any[] = [];
  public list_columns: any[] = [];
  public editing = {};
  public editingInfo = {};
  public setFandianInfo = {};
  public list_loading: boolean = false;
  public list_count: number = 0;
  public list_page = {};

  constructor(protected tableService: TableService) {
  }

  ngOnInit() {
    this.list_columns = [
      {prop: 'fan_dian', name: '编号', sortable: false},
      {prop: 'user_count', name: '地点', sortable: false},
      {name: '操作', cellTemplate: this.template_op, sortable: false}
    ];

    this.loadUserQuota();
  }

  protected loadUserQuota(): void {
    this.list_loading = true;
    this.tableService.getDatas3().subscribe(res => {
      this.list_rows = res;
      this.list_count = res.length;
      setTimeout(() => {
        this.list_loading = false;
      }, 1500);
    });
  }

  // 保存修改记录
  public updateValue(event, id, ceil) {
    this.editingInfo[id + '-' + ceil] = event.target.value;
  }

  // 保存修改
  public onRowUpdate(id: number): void {
    let item = {};
    let index = 0;
    this.editing[id + '-' + 'fan_dian'] = false;

    this.list_rows.forEach((value, i) => {
      if (value.id === id) {
        item = value;
        index = i;
      }
    });
    this.setFandianInfo['id'] = id;
    this.setFandianInfo['userCount'] = this.editingInfo[id + '-' + 'user_count'] ?  this.editingInfo[id + '-' + 'user_count'] : item['user_count'];
    this.setFandianInfo['fanDian'] = this.editingInfo[id + '-' + 'fan_dian'] ? this.editingInfo[id + '-' + 'fan_dian'] : item['fan_dian'];

    // 保存修改
    this.list_rows[index]['user_count'] = this.setFandianInfo['userCount'];
    this.list_rows[index]['fan_dian'] = this.setFandianInfo['fanDian'];
  }

  // 删除
  public onRowDelete(id: number): void {

  }

  // 分页
  public onPage(event): void {
    this.list_page = {index: event.offset + 1, count: event.limit};
    this.loadUserQuota();
  }

  // 列排序
  public onSort(event: any): void {

  }
}
