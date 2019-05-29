import { Component, OnInit } from '@angular/core';
import { AppsData } from './services/items-stock.services';
import {TreeNode} from 'primeng/api';
import { map } from 'rxjs/operators';

@Component({
  selector: 'map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  public data: any[];
  public dataConvert: any[];
  public filesData:TreeNode[];

  constructor(public _srvApps: AppsData) { }

  ngOnInit() {
    this._srvApps.getAll().subscribe(appData => {
      this.filesData = appData.map(app => {
        return this.convertAppsToTree(app)
      })
    })
  }

  convertAppsToTree(app) {
    this.dataConvert = [{
      label: app.aplicacion.titulo,
      children: app.aplicacion.procesos ? this.convertProcesosToChildren(app.aplicacion.procesos) : null
    }]
    console.log(this.dataConvert)
    setTimeout(() => {
      this.filtrarArray()
    }, 5000);
    return this.dataConvert;
  }
  convertProcesosToChildren(procesos) {
    return procesos.map(proceso => {
      return {
        label: proceso.nombre,
        children: proceso.modulos ? this.convertModulosToChildren(proceso.modulos) : null
      }
    })
  }
  convertModulosToChildren(modulos){
    return modulos.map(modulo => {
      return {
        label: modulo.nombre,
        children: modulo.acciones ? this.convertModulosToChildren(modulo.acciones) : null
      }
    })
  }
  filtrarArray(){
    let obj = {label: "verSolicitudes", children: null}
    let newdataConvert = this.dataConvert.filter(objData => objData !==  obj)
    this.dataConvert = []
    this.dataConvert = newdataConvert; 
    alert()
  }
}

// {
//   "data":
//   [
//       {
//           "label": "Documents",
//           "data": "Documents Folder",
//           "expandedIcon": "fa fa-folder-open",
//           "collapsedIcon": "fa fa-folder",
//           "children": [{
//                   "label": "Work",
//                   "data": "Work Folder",
//                   "expandedIcon": "fa fa-folder-open",
//                   "collapsedIcon": "fa fa-folder",
//                   "children": [{"label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document"}]
//               },
//               {
//                   "label": "Home",
//                   "data": "Home Folder",
//                   "expandedIcon": "fa fa-folder-open",
//                   "collapsedIcon": "fa fa-folder",
//                   "children": [{"label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month"}]
//               }]
//       },
//       {
//           "label": "Pictures",
//           "data": "Pictures Folder",
//           "expandedIcon": "fa fa-folder-open",
//           "collapsedIcon": "fa fa-folder",
//           "children": [
//               {"label": "barcelona.jpg", "icon": "fa fa-file-image-o", "data": "Barcelona Photo"},
//               {"label": "logo.jpg", "icon": "fa fa-file-image-o", "data": "PrimeFaces Logo"},
//               {"label": "primeui.png", "icon": "fa fa-file-image-o", "data": "PrimeUI Logo"}]
//       },
//       {
//           "label": "Movies",
//           "data": "Movies Folder",
//           "expandedIcon": "fa fa-folder-open",
//           "collapsedIcon": "fa fa-folder",
//           "children": [{
//                   "label": "Al Pacino",
//                   "data": "Pacino Movies",
//                   "children": [{"label": "Scarface", "icon": "fa fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa fa-file-video-o", "data": "Serpico Movie"}]
//               },
//               {
//                   "label": "Robert De Niro",
//                   "data": "De Niro Movies",
//                   "children": [{"label": "Goodfellas", "icon": "fa fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa fa-file-video-o", "data": "Untouchables Movie"}]
//               }]
//       }
//   ]
// }