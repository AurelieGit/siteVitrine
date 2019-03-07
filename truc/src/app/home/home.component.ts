import { Component, OnInit } from '@angular/core';
import{ApiService} from '../shared/services/api.service';
import{StorageService} from '../shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userData:any;
  //public emittedDat:any[] = [];//

  constructor(private _dataService: ApiService, private _shareData:StorageService) { }

  ngOnInit() {
    this.getData();
  }
  getData (): any{
    this._dataService.getUsers().subscribe(
      data => {
        this.userData = data;
        this.userData = this.userData.results;
        this._shareData.storage =  this.userData;
        return this.userData;
      },
      err => console.error(err),
      () => console.log('done loading user')
    )
  }
  
}
