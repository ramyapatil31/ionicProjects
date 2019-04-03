import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	username="";
	password="";

  constructor(private router: Router, public alertController: AlertController) {}

  ngOnInit() {}

  doLogin(){
  	if(this.username==this.password){
  		this.router.navigate(['./dashboard']);
  	}else{
  		this.presentAlert();
  		this.username="";
  		this.password="";
  	}
  	
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      subHeader: 'Invalid Username/Password',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
