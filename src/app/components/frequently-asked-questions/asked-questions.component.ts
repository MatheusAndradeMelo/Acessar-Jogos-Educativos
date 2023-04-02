import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asked-questions',
  templateUrl: './asked-questions.component.html',
  styleUrls: ['./asked-questions.component.css']
})
export class AskedQuestions implements OnInit {

  items = ['QUANTO TEMPO RECEBO AS APOSTILAS?', 
  'O PRODUTO CHEGA NA MINHA CASA? PRECISA DO MEU ENDEREÇO?', 
  'PARA QUAL FAIXA ETÁRIA O PROJETO ACESSAR JOGOS EDUCATIVOS É INDICADO?', 
  'POR QUANTO TEMPO TEREI ACESSO AOS MATERIAIS? ',
   'QUAIS AS FORMAS DE PAGAMENTOS?'];

   list_answer = ['Você recebe o seu acesso imediatamente, após confirmar o pagamento. Boleto pode demorar de 24 horas a 72 horas para liberar.',
  'Não, o produto não chegará na sua casa. O produto é TOTALMENTE DIGITAL e chegará no seu e-mail.',
'Nosso material é indicado para crianças de todas as idades, obviamente alterando os assuntos e dificuldades de acordo com a habilidade das crianças. Os jogos podem até ser utilizados por adultos que tenham também alguma dificuldade no aprendizado, ou seja, o projeto acessar é para TODOS.',
'Acesso vitalício, ou seja, ao adquirir nosso material você poderá usá-lo quantas vezes quiser.',
'Você pode pagar no boleto à vista ou em até 4x no cartão de crédito. Ao pagar no cartão você recebe imediatamente todo o material, já no boleto você recebe assim que o pagamento for confirmado pelo banco.',
'Sim, qualquer dúvida ou suporte que precisar basta nos mandar um e-mail para: suportejogoseducativos@gmail.com ou nos chamar no whatsapp (21) 96915-9150'
  ]
expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
