import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from 'src/app/cardItem.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() listadoCarrito: CardItem;

  constructor() { 
  }

  mostrar(){
    console.log(this.listadoCarrito);
  }
  ngOnInit(): void {
  }

}
