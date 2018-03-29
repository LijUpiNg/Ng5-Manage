import { Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() {
  }
  private sentence = ['你无法叫醒一个不回你消息的人，但是红包能。',
  '自己选择的路，说不走就不走。',
  '有时候你不努力一下，不知道什么叫绝望。',
  '那些曾经把我击倒的人，谢谢你们，躺着真的很舒服!',
  '比你优秀的人都在努力，那你再努力还有什么用。',
  '一些人追求卓越是因为他们天性如此，且能力出众。很多其他人却也喜欢跟着凑热闹。',
  '如果所有人都理解你，那你得普通成什么样。',
  '世上无难事，只要肯放弃。',
  '除了有钱人，世上还有两种人：其一是省吃俭用买奢侈品装逼，其二是省吃俭用也买不起奢侈品的。',
  '如果你是长得好看的话，在公车地铁上睡着了，头靠在旁边人的肩上，旁边的人会一直陪着你直到醒来。你要是长的丑的话，头一旦靠在旁边的人肩上，他会立即拍醒你，并温馨提醒你保管好财物。'];

  public txt:string = '';
  ngOnInit() {
    const num: number  = Math.floor(Math.random() * 10);
    this.txt = this.sentence[num];
  }
}
