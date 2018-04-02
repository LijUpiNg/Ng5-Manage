import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  public article: any;
  public config: any = {
    uiColor: '#F8F8F8',
    language: 'zh-cn',
    fontSize_defaultLabel : '14',
    toolbarCanCollapse: false,
    toolbar: [
      ['Maximize', '-', 'Undo', 'Redo', '-', 'Cut', ' Copy', 'Paste', 'PasteText', '-', 'Link', 'Unlink', 'Anchor', '-', 'Table', 'HorizontalRule', 'SpecialChar', '-', 'Source', 'Format'],
      ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', '-', 'Font', 'FontSize']
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
