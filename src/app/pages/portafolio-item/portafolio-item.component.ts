import { ProductoDescripcion } from './../../interfaces/producto-descripcion.interface';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros => {
      // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
            .subscribe( (producto: ProductoDescripcion) => {
              this.producto = producto;
              this.id = parametros['id'];
              // console.log(producto);
      });
    });
  }

}
