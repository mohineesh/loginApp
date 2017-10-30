import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  LogOut(){
     this.route.navigate(['login']);
  }
}
