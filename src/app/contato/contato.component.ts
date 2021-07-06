import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  name : string = 'Form Contato'

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    console.log('ContatoInit app')
    // const contato :Contato = new Contato();
    // contato.nome = 'Contato';
    // contato.email = 'email@email.com';
    // contato.favorito =false;
    // this.contatoService.save(contato).subscribe(result=>{
    //   console.log(result)
    // });
  }

}
