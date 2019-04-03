import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'edit.customer',
  templateUrl: './edit.customer.component.html',
  styleUrls: ['./edit.customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  customers=[];
  constructor(private router: Router, private route: ActivatedRoute, private customerService:CustomerService, public alertController: AlertController) { }
  id: number;
  private sub: any;
  customer:any;
 ngOnInit() {
    this.customer = {name:'', email:'', address:'', phone:''};
     this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{this.customer = customer;});
    });
  }

 updateCustomer(){
    this.customerService.updateRemoteCustomer(this.customer).subscribe(()=>{this.router.navigate(['/list-customer']);});
  }
  /*updateCustomer(customer){
   this.customerService.updateCustomer(customer);
   customer = this.customerService.getCustomers();
   this.router.navigate(['./list-customer']);
   this.presentAlert();
  }*/

    async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Successful',
      subHeader: 'Customer Edited Successfully',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
