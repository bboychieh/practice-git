import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../viewmodel/member';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.styl']
})
export class DetailComponent implements OnInit {

  @Input() member:Member;

  constructor() { }

  ngOnInit() {
  }

}
