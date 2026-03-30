import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MenuItem, Navbar } from '@shared/components/navbar/navbar';
import { NavbarItem } from './navbar-item/navbar-item';

describe('Navbar', () => {
  let component:Navbar;
  let fixture:ComponentFixture<Navbar>;

  @Component({ selector: 'app-navbar-item', template: '' })
  class MockNavbarItem {}

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])]
    }).overrideComponent(Navbar, {
      add: {
        imports: [MockNavbarItem]
      },
      remove: {
        imports: [NavbarItem]
      }
    });

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create the navbar', () => {
    expect(component).toBeDefined();
  });

  // it('should expose the expected menu items', () => {
  //   const menu:MenuItem[] = [
  //     { label: 'Ranking', route: '/ranking' },
  //     { label: 'Arena', route: '/arena' },
  //     { label: 'Especies', route: '/species' }
  //   ];

  //   expect(menu).toEqual(menu);
  // });

  // it('should render navbar items in mobile and desktop menus', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const navbarItems = compiled.querySelectorAll('app-navbar-item');

  //   expect(navbarItems.length).toBe(6);
  // });

  // it('should render the brand title', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const brandLink = compiled.querySelector('.navbar-start a[routerlink]');

  //   expect(brandLink).toBeTruthy();
  //   expect(brandLink?.textContent?.replace(/\s+/g, ' ').trim()).toBe('Galactic Tournament');
  // });
});