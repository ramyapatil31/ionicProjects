import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
 constructor(private router: Router, private customerService: CustomerService) {
 this.routeEvent(this.router);
 }

 routeEvent(router: Router){
  router.events.subscribe(e => {
    if(e instanceof NavigationEnd){
      console.log(e)
      if(e.urlAfterRedirects == '/list-customer'){
        this.customerService.getRemoteCustomers().subscribe((r) => {this.customers = r;});
      }
    }
  });
}

  customers = [];

  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
  }
  
  deleteCustomer(customer){
    this.customerService.deleteRemoteCustomer(customer).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
    });
   // this.list = this.customerService.getCustomers();
  }

  editCustomer(customer){
   this.router.navigate(['/edit-customer/'+customer.id]);
   customer = this.customerService.getCustomers();
   }
}
