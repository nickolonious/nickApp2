import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsComponent } from './pets.component';
import { MaterialModule } from "@angular/material";
import { AngularFire } from "angularfire2";

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsComponent ],
       imports: [MaterialModule.forRoot()],
      providers: [{PetsComponent, provide: AngularFire}]

    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PetsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => addProviders([
    PetsComponent,
    AngularFire
  ]));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
