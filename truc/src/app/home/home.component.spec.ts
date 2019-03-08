import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
//import { Router, RouterModule} from '@angular/core';
import {routes} from '../app-routing.module';
import {HeaderComponent} from '../header/header.component';
import {NavComponent} from '../header/nav/nav.component';
import { HomeComponent } from './home.component';
import { UserComponent } from '../user/user.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpClientModule } from '@angular/common/http';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HomeComponent,
          HeaderComponent,
          NavComponent,
          UserComponent,
          ContactComponent
        ],
      imports:[
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
