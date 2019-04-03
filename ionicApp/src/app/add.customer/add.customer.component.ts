import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
   customer = {
      id:0,
      name:'',
      email:'',
      phone:'',
      address:''
    };

  constructor(private router: Router,private customerService: CustomerService, public alertController: AlertController) { }

  ngOnInit() {
  }

   /*addCustomer(){
   this.customerService.addCustomer(this.customer);
   this.router.navigate(['./list-customer']);
   this.presentAlert();
   //customer = this.customerService.getCustomers();
  }*/

  addCustomer(){
    this.customerService.addRemoteCustomer(this.customer)
  .subscribe(()=>this.router.navigate(['./list-customer']));
  }
    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Successful',
      subHeader: 'Customer Added Successfully',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
