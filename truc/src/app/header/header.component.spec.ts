import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import {  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HeaderComponent } from './header.component';
import {Mockdata} from '../../fixtures/mockdata';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;
  let data;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  beforeEach(fakeAsync(() => {
    data = new Mockdata().data;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one div tag', fakeAsync (() => {
    expect(compiled.querySelector('div')).toBeTruthy();
  }));

  it('should render two div tag', fakeAsync (() => {
    expect((compiled.querySelectorAll('div').length)).toEqual(2);
  }));

  it('should not show text content'), fakeAsync (() => {
    expect((compiled.querySelector('div').textContent)).toBeFalsy();
  });

  it ('should methodeAurelie return true', () => {
    let methodeAurelietest = component.methodeAurelie();
    expect(methodeAurelietest).toBeTruthy();
  });

  it('should data to be truthy', fakeAsync (() => {

    expect(data).toBeTruthy();
  }));

  it('should data to be an object', fakeAsync (() => {
    
    expect(data).toEqual(jasmine.any(Object));
  }));


});
