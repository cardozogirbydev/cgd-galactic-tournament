import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '@shared/components/navbar/navbar';
import { App } from './app';

@Component({ selector: 'router-outlet', template: '' })
class MockRouterOutlet {}

@Component({ selector: 'app-navbar', template: '' })
class MockNavbar {}

describe('App', () => {
  let component:App;
  let fixture:ComponentFixture<App>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [App]
    }).overrideComponent(App, {
      add: {
        imports: [MockRouterOutlet, MockNavbar]
      },
      remove: {
        imports: [RouterOutlet, Navbar]
      }
    });

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should render router-outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const routerOutlet = compiled.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });

  it('should render navbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navbar = compiled.querySelector('app-navbar');

    expect(navbar).toBeTruthy();
  });
});
