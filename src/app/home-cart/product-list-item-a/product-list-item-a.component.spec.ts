import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemAComponent } from './product-list-item-a.component';

describe('ProductListItemAComponent', () => {
  let component: ProductListItemAComponent;
  let fixture: ComponentFixture<ProductListItemAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListItemAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
