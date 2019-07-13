import { Component, OnInit } from '@angular/core';
import { TramaService } from '../../services/trama/trama.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})

export class DashboardComponent implements OnInit {
  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'tableZonas', // the id of html/table element
  };
  allTramas: any;
  curruser: any;
  availableAreas = ['ZON01', 'ZON02', 'ZON03', 'ZON04', 'ZON05', 'ZON06', 'ZON07', 'ZON08', 'ZON09', 'ZON10', 'ZON11', 'ZON12'];
  datosZonas = [];
  constructor(private tramaService: TramaService, private exportAsService: ExportAsService) {
    console.log(this.allTramas);
  }
  pin: number;
  sistemaActivo = false;
  lucesEncendidas = false;

  ngOnInit() {
    // https://www.google.com/search?q=create+service+of+firebase+angular&ie=utf-8&oe=utf-8&client=firefox-b-e#kpvalbx=1
    // https://github.com/angular/angularfire2/blob/HEAD/docs/install-and-setup.md
    // this.curruser = this.authserve.auth.currentUser.displayName;
    this.pin = Math.floor(Math.random() * 9000) + 1000;
    // this.tramaService.get_trama('1pD2O5Y8tlbVqfQ0H79f').subscribe(tramas => {
    //  this.allTramas = tramas;
    //  console.log(tramas);
    // });
    this.availableAreas.forEach(valueData => {
      this.tramaService.get_trama_zona(valueData).subscribe(tramas => {
        const dic = {};
        dic[valueData] = tramas;
        // const dic = {ZON06: [{sensor: 'ASDASDASD'}]};
        this.datosZonas.push(dic);
      });
    });
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'Reporte').subscribe(() => {
      // save started
    });
  }

  activarLuces() {
    this.lucesEncendidas = !this.lucesEncendidas;
  }

  activarSistema() {
    this.sistemaActivo = !this.sistemaActivo;

  }

}
