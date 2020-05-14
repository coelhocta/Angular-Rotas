import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Subscription } from 'rxjs';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(): void {
  this.inscricao.unsubscribe();
  }

  proximaPagina(){
    // this.pagina ++;
    this.router.navigate(['/cursos',],
      {queryParams: {'pagina': ++this.pagina}}
    );
  }

}
