import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, input } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MenuItem, Navbar } from '@shared/components/navbar/navbar';
import { NavbarItem } from './navbar-item/navbar-item';

describe('Navbar', () => {
  let component:Navbar;
  let fixture:ComponentFixture<Navbar>;

  @Component({ selector: 'app-navbar-item', template: '' })
  class MockNavbarItem {
    menuItem = input.required<MenuItem>();
  }

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

  it('should expose the expected menu items', () => {
    const menu:MenuItem[] = [
      { label: 'Ranking', route: '/ranking' },
      { label: 'Arena', route: '/arena' },
      { label: 'Especies', route: '/species' }
    ];

    expect(menu).toEqual(component['menu']);
  });
});