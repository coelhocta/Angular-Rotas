import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
    {path: '', component: CursosComponent},
    {path: ':id', component: CursoDetalheComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
 ];


@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]

})

export class CursosRoutingModule {}