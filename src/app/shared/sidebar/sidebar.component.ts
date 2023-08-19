import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  nemuItems: any[];

  constructor( private sidebarService: SidebarService ) {
    this.nemuItems = sidebarService.menu;


  }

  ngOnInit(): void {

  }

}
