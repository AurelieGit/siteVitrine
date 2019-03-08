import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  contactForm = new FormGroup({
  inputNom: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  inputPrenom: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  inputEmail: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]),
  inputSujet: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
  inputMessage: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(250)]),
});

onSubmit(){
  if(!this.contactForm.valid){
    alert("le formulaire n'est pas valide");
    return;
  }else{
    let dataArray:any[]= []; // initialiser dataarray de type any table qui est un tableau //
    let arrayName:string = "data"; // initialise arrayName de type string qui obtient la valeur data //
    dataArray.push(this.contactForm.value); // dataArray push(envoie) les donnée du formulaire dans un tableau //
    console.log("dataArray:", dataArray);
    localStorage.setItem(arrayName, JSON.stringify(dataArray)); // met les donnée dans le localstorage (ctrl+maj+i puis application -> localStorage) il récupere les nom qui est assigner a une donner arrayName JSONstringify tranforme l'objet en string pour l'afficher dans la console //
  }
}
}