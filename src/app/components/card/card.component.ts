import { Component, OnInit, Input } from '@angular/core';
import { CardItem } from 'src/app/cardItem.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //@Input() listadoCarrito: CardItem;

  constructor() { 
  }
array:any=[];

  mostrar(listadoCarrito: any){
   
    listadoCarrito.forEach((val: any) => this.array.push(Object.assign({}, val)));
    
    console.log("ACA ESTÁ LISTADO CARRITO COPIADO",listadoCarrito)
    
  }

  finalizarCompra(){
    alert("compra finalizada")
  }
  ngOnInit(): void {

  }

}
