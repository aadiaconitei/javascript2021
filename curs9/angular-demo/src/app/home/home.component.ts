import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';
const HEROES = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 5, name: 'BatGirl' },
  { id: 3, name: 'Robin' },
  { id: 4, name: 'Flash' }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titlulHome = 'Acasa';
  descriere = ' Prima pagina din aplicatia mea';
  color = '#e3e3e3';
  heroes = HEROES;  // array
  alt = this.heroes[0].name;
  showImage = false;
  nume = 'Ion';
  image = 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'; // [src]
  
  constructor(private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.salut('Mihai');
  }

  afiseazaImagine(){
    this.showImage = !this.showImage;
  }
  salut(salut){
    this.alertaService.showAlert(salut);
  } 

}
