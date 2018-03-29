import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableService } from '../../../shared/manage-service/table.service';

@Component({
  selector: 'app-index',
  templateUrl: './data-table1.component.html',
  styleUrls: ['./data-table1.component.scss'],
  providers: [ TableService ]
})

export class DataTable1Component implements OnInit {

  @ViewChild('template_op') protected template_op: TemplateRef<any>;
  @ViewChild('template_status') protected template_status: TemplateRef<any>;
  @ViewChild('template_project') protected template_project: TemplateRef<any>;
  @ViewChild('template_recharge') protected template_recharge: TemplateRef<any>;

  public list_rows: any[] = [];
  public list_columns: any[] = [];

  public list_loading: boolean = false;
  public list_count: number = 10;
  public list_page = {index: 1, count: 10};

  constructor(protected tableService: TableService) {
  }

  ngOnInit() {
    this.list_columns = [
      {prop: 'id', name: '编号', sortable: false, width: 60},
      {prop: 'name', name: '名称', sortable: false, width: 210},
      {prop: 'industry', name: '行业', sortable: false, width: 120},
      {prop: 'balance', name: '可用余额', sortable: false, width: 80},
      {prop: 'pending', name: '待处理余额', sortable: false, width: 80},
      {prop: 'frozen', name: '冻结余额', sortable: false, width: 80},
      {prop: 'registrationTime', name: '注册时间', sortable: false, width: 150},
      {prop: 'registrationIP', name: '注册IP', sortable: false, width: 100},
      {prop: 'status', name: '状态', cellTemplate: this.template_status, sortable: false, width: 100},
      {prop: 'project', name: '项目', cellTemplate: this.template_project, sortable: false, width: 200},
      {prop: 'recharge', name: '充值', cellTemplate: this.template_recharge, sortable: false, width: 50},
      {name: '操作', cellTemplate: this.template_op, sortable: false, width: 100}
    ];
    this.LoadList();
  }

  //  加载商户列表
  protected LoadList(): void {
    this.list_loading = true;
    this.tableService.getDatas2().subscribe(res => {
      setTimeout(() => {
        this.list_loading = false;
      }, 1500);
      this.list_rows = res;
      this.list_count = res.length;
    });
  }

  // 分页
  public onPage(event): void {
    console.log(event.offset + 1);
    console.log(event.limit);
    this.list_page = {index: event.offset + 1, count: event.limit};
  }

  public onRowEdit(id: number): void {
  }

  public onRowDetail(id: number): void {
  }

  public onRowDelete(id: number): void {

  }
}
