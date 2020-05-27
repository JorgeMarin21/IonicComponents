import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaSwiperPage } from './prueba-swiper.page';

describe('PruebaSwiperPage', () => {
  let component: PruebaSwiperPage;
  let fixture: ComponentFixture<PruebaSwiperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaSwiperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaSwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
