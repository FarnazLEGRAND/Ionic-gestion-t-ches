import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TacheItemPage } from './tache-item.page';

describe('TacheItemPage', () => {
  let component: TacheItemPage;
  let fixture: ComponentFixture<TacheItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TacheItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
