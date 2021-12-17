import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardItem } from 'src/app/cardItem.model';


@Component({
  selector: 'app-more-views',
  templateUrl: './more-views.component.html',
  styleUrls: ['./more-views.component.css']
})

export class MoreViewsComponent implements OnInit {
  
listMoreViews = [
{ id: "peli4",
  nombre: "La vida es bella",
  img: "../../../assets/img/peli4.jpg",
  resumen: 'En 1939, a punto de estallar la Segunda Guerra Mundial, Guido llega a Arezzo con la intención de abrir una librería. Allí conoce a Dora y, a pesar de que está prometida con el fascista Rodolfo, acaba casándose con ella y tienen un hijo.',
  alquiler: 150,
  compra: 750
},
{ id: "peli5",
  nombre: "El Resplandor",
  img: "../../../assets/img/peli5.jpg",
  resumen: 'Jack Torrance se convierte en cuidador de invierno en el Hotel Overlook, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con familia. Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida.',
  alquiler: 200,
  compra: 800

},
{id: "peli6",
  nombre: "La Bella y La Bestia",
  img: "../../../assets/img/peli9.jpg",
  resumen: 'Una hermosa joven llamada Bella, acepta alojarse en un castillo con una bestia a cambio de la libertad de su padre. El animal es en realidad un príncipe encantado que, para romper el hechizo, tendrá que ganarse el amor de una dama.',
  alquiler: 125,
  compra: 600

},
{id: "peli7",
  nombre: "Forrest Gump",
  img: "../../../assets/img/peli6.jpg",
  resumen: 'Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas.',
  alquiler: 230,
  compra: 680

},
{id: "peli8",
  nombre: "El Padrino",
  img: "../../../assets/img/peli8.jpg",
  resumen: 'El padrino es el nombre que reciben las películas dirigidas por Francis Ford Coppola​ y escritas por él mismo junto con el novelista Mario Puzo.​ La trilogía consta de las tres películas.',
  alquiler: 320,
  compra: 900

},
{id: "peli9",
  nombre: "Los Simpson-La Pelicula",
  img: "../../../assets/img/peli7.jpg",
  resumen: 'La combinación de Homero, su nuevo puerco mascota, y un silo lleno de excremento podrían provocar un desastre. Una muchedumbre enojada llega a la casa de los Simpson y divide a la familia. Homero se prepara para intentar redimirse con la intención de salvar al mundo y ganarse el perdón de Marge.',
  alquiler: 105,
  compra: 420
},
{id: "peli10",
  nombre: "Este es el fin",
  img: "../../../assets/img/peli10.jpg",
  resumen: 'Mientras el actor James Franco celebra una fiesta en su casa, en compañía de otras celebridades, el apocalipsis estalla en las calles de Los Ángeles. Si van a morir de todas formas, ¿no es mejor que al menos la pasen bien?',
  alquiler: 260,
  compra: 850
},
{id: "peli11",
  nombre: "El club de la pelea",
  img: "../../../assets/img/peli11.jpg",
  resumen: 'Un empleado de oficina insomne, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de lucha clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo.',
  alquiler: 230,
  compra: 760
}
]
constructor() {
  
}

@Output () listadoCarrito = new EventEmitter<CardItem>();
cardList: any =[];


nameItem: string ="";
priceItem:number= 0;
quantityItem:number = 1;
buyType: string = "";

  

addRent(identifier: string){
  
  for ( let i=0 ; i < this.listMoreViews.length; i++ ){
    if (this.listMoreViews[i].id == identifier){
     this.buyType = "Alquiler";
     this.nameItem= this.listMoreViews[i].nombre;
     this.priceItem = this.listMoreViews[i].alquiler
     this.cardList.push(new CardItem(this.nameItem, this.priceItem, this.quantityItem, this.buyType));
     
   }

  }
  this.listadoCarrito.emit(this.cardList);
 console.log ("addRent",this.cardList);
}

addBuy(identifier : string){

   for ( let i=0 ; i < this.listMoreViews.length; i++ ){
     if (this.listMoreViews[i].id == identifier){
      this.buyType = "Compra";
      this.nameItem= this.listMoreViews[i].nombre;
      this.priceItem = this.listMoreViews[i].compra
      this.cardList.push(new CardItem(this.nameItem, this.priceItem, this.quantityItem, this.buyType));
      
    }
 
   }
   this.listadoCarrito.emit(this.cardList);
  console.log ("addBuy",this.cardList);
 
};




  ngOnInit(): void {
    
  }

  

}
