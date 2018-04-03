import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableService } from '../../../shared/manage-service/table.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DaterangepickerService } from '../../../shared/components/daterangepicker/range/daterangepicker.service';
import { DataTable2Modal } from '../../../shared/modal/data-table2.modal';
@Component({
  selector: 'app-index',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.scss'],
  providers: [TableService, DataTable2Modal]
})

export class DataTable2Component implements OnInit {
  closeResult: string;

  @ViewChild('template_op') protected template_op: TemplateRef<any>;
  @ViewChild('template_status') protected template_status: TemplateRef<any>;
  @ViewChild('template_pull') protected template_pull: TemplateRef<any>;
  @ViewChild('template_upper') protected template_upper: TemplateRef<any>;

  public list_rows: Array<DataTable2Modal> = [];
  public list_columns: any[] = [];

  public list_loading: boolean = false;
  public list_count: number = 10;
  public list_page = {index: 1, count: 10};

  constructor(private tableService: TableService, private ngbModal: NgbModal, private daterangepickerService: DaterangepickerService) {
  }

  ngOnInit() {
    this.list_columns = [
      {prop: 'id', name: '编号', sortable: false, flexGrow: 1, width: 60},
      {prop: 'shopId', name: '商户', sortable: false, flexGrow: 1, width: 80},
      {prop: 'app', name: '应用', sortable: false, flexGrow: 1, width: 90},
      {prop: 'type', name: '类型', sortable: false, flexGrow: 1, width: 80},
      {prop: 'pipe', name: '渠道', sortable: false, flexGrow: 1, width: 80},
      {prop: 'network', name: '网关', sortable: false, flexGrow: 1, width: 80},
      {prop: 'appId', name: '应用单号', sortable: false, flexGrow: 1, width: 80},
      {prop: 'currency', name: '币种', sortable: false, flexGrow: 1, width: 60},
      {prop: 'account', name: '支付金额', sortable: false, flexGrow: 1, width: 100},
      {prop: 'counterfee', name: '支付手续费', sortable: false, flexGrow: 1, width: 90},
      {prop: 'discount', name: '优惠金额', sortable: false, flexGrow: 1, width: 80},
      {prop: 'refund', name: '退款金额', sortable: false, flexGrow: 1, width: 80},
      {prop: 'refound-counter', name: '退款手续费', sortable: false, flexGrow: 1, width: 90},
      {prop: 'time', name: '时间', sortable: false, flexGrow: 1},
      {prop: 'status', name: '状态', cellTemplate: this.template_status, sortable: false, flexGrow: 1, width: 60},
      {name: '上级网关订单', cellTemplate: this.template_upper, sortable: false, flexGrow: 1, width: 110},
      {name: '拉取/推送', cellTemplate: this.template_pull, sortable: false, flexGrow: 1, width: 100},
      {name: '操作', cellTemplate: this.template_op, sortable: false, flexGrow: 1, width: 100}
    ];
    this.daterangepickerService.dateRangePicker('startEndTime', date => { console.log(date); });
    this.LoadList();
  }

  protected LoadList(): void {
    this.list_loading = true;
    this.tableService.getDatas().subscribe(res => {
      this.list_rows = res;
      this.list_count = res.length;
      setTimeout(() => {
        this.list_loading = false;
      }, 1500);
    });
  }

  // 订单详情
  public onRowDetail(event): void {
    console.log('查看详情');
  }

  // 订单删除
  public onRowDelete(event): void {
    console.log('删除订单');
  }

  // 订单编辑
  public onRowEdit(event): void {
    console.log('订单编辑');
  }

  // 打开模态框 --- 来自ngb-bootstrap的NgbModal
  open(content) {
    this.ngbModal.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // 模态框错误提示: 参考ngb-bootstrap代码
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public reset(): void {
    this.daterangepickerService.dateRangePicker('startEndTime', date => { console.log('日期重置成功'); });
  }

}
