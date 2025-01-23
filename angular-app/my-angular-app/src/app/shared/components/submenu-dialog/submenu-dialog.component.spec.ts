import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuDialogComponent } from './submenu-dialog.component';

describe('SubmenuDialogComponent', () => {
  let component: SubmenuDialogComponent;
  let fixture: ComponentFixture<SubmenuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenuDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
