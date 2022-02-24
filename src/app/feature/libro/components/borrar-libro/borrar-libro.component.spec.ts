import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BorrarLibroComponent } from './borrar-libro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LibroService } from '../../shared/service/libro.service';
import { HttpService } from 'src/app/core/services/http.service';

describe('BorrarProductoComponent', () => {
  let component: BorrarLibroComponent;
  let fixture: ComponentFixture<BorrarLibroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarLibroComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [LibroService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
