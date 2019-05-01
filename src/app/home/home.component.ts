import { Component, OnInit } from '@angular/core';
import { Member } from '../viewmodel/member';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  members:Member[];
  selectedMember:Member;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getMembers().subscribe(members => this.members = members);
  }
  onSelect(member:Member){
    this.selectedMember = member;
  }

}
