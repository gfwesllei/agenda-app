import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import {FormBuilder ,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario! : FormGroup;

  constructor(
    private contatoService: ContatoService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome : ['',Validators.required],
      email: ['',Validators.email]
    })
  }

  submite(): void {
    const contato = this.formulario.value;
    const isValid =     this.formulario.valid;
    if(isValid){
      this.contatoService.save(contato).subscribe(result=>{
            console.log(result)
      });
    }

    // const contato :Contato = new Contato();
    // contato.nome = 'Contato';
    // contato.email = 'email@email.com';
    // contato.favorito =false;
   
  }

}
