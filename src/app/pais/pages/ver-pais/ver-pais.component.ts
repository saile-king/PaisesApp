import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisSevice: PaisService
    ) { }

  ngOnInit(): void {

    this.activedRoute.params
    .pipe(
      switchMap( ( {codigoPais} ) => this.paisSevice.getPaisPorAlpha( codigoPais ) ),
      tap( console.log )
    )
      .subscribe( pais => this.pais = pais)

    //this.activedRoute.params
    //  .subscribe( ({ codigoPais }) => {
    //    console.log(codigoPais);
    //    this.pasiSevice.getPaisPorAlpha( codigoPais )
    //    .subscribe( pais => {
    //      console.log(pais);
    //    });
    //  });


  }

}
