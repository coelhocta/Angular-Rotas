import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';


@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any = {}
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
    (params: any) => {
      let id = params['id']; 
    
      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno === null){
        this.aluno = {};
      }
    })
  };

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();  
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou')
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true
  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}