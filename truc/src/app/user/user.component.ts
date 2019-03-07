import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public data:any[] = [];
  public id:string;
  public user:object;
  constructor(private _route:ActivatedRoute, private _shareData:StorageService) { }

  ngOnInit() {
    this.setUser(this.id, this.data, this.user);
  }

  getId(id:string){
    
    this.id = id;
    this.id = this._route.snapshot.paramMap.get('id');
    return this.id;

  }

  getData(data:any):any[]{
    this.data = data;
    return this.data = this._shareData.storage;
  }

  setUser(id:string, data:any, user:any):object{
    
    this.id = id;
    this.data = data;
    this.user = user;
    let usersData = this.getData(this.data);
    let userId = this.getId(this.id);
    let userInfos = usersData[this.id]
    console.log("user Data :", userInfos);
    return userInfos;

  }
}
