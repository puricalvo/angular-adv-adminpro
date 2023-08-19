import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Principal',
      icom: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/' },
        { title: 'Gráficas', url: 'grafica1' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Promise', url: 'promise' },
        { title: 'rxjs', url: 'rxjs' },
      ]
    },
  ];

  constructor() { }
}
