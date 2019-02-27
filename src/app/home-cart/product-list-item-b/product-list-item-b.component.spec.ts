import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemBComponent } from './product-list-item-b.component';

describe('ProductListItemBComponent', () => {
  let component: ProductListItemBComponent;
  let fixture: ComponentFixture<ProductListItemBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListItemBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
