import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://192.168.0.34:3000/api/customers';
  constructor(private http: HttpClient) {
    var defaultCustomers = [
    
    ];

    if(localStorage.getItem('customers')==null){
      this.customers = defaultCustomers;
      this.setLocalStorageCustomers(this.customers);
    }else{
      this.getLocalStorageCustomers();
    }
   }
    customers= [];

getLocalStorageCustomers(){
  this.customers = JSON.parse(localStorage.getItem('customers'));
}
setLocalStorageCustomers(list){
  localStorage.setItem('customers', JSON.stringify(list));
}

 getRemoteCustomers(): Observable<[]>{
    return this.http.get<[]>(this.customerUrl);     
 }
 deleteRemoteCustomer(customer){
    return this.http.delete(this.customerUrl+'/'+customer.id);     
 }

 addRemoteCustomer(customer): Observable<any>{
    return this.http.post(this.customerUrl, customer);     
 }

  getCustomers(){
		return this.customers;
}

  updateCustomer(customer){
  	  var updated = false;
  	  for(var i=0; i<this.customers.length;i++){
      if(customer.id==this.customers[i].id){
        updated=true;
        this.customers[i] = customer;
        break;
      }
    }
    if(!updated){
    	customer.id= Math.round(Math.random()*1000);
    	this.customers.push(customer);
    }
    this.setLocalStorageCustomers(this.customers);
  }
  addCustomer(customer){
  	  customer.id= Math.round(Math.random()*1000);
    	this.customers.push(customer);
      this.setLocalStorageCustomers(this.customers);
  }

   getCustomerById(id){
   	for(var i=0; i<this.customers.length;i++){
   		if(id== this.customers[i].id){
   			return this.customers[i];
         break;
   		}
   	}
   }

  updateRemoteCustomer(customer):Observable<any>{
    return this.http.put(this.customerUrl + "/"+customer.id,customer);
 }

  getRemoteCustomerById(id):Observable<any>{
   return this.http.get<[]>(this.customerUrl + "/"+id);
 }

   deleteCustomer(customer){
   	for(var i=0; i<this.customers.length;i++){
   	if(customer.id==this.customers[i].id){
   		this.customers.splice(i,1);
       this.setLocalStorageCustomers(this.customers);
     }
   	}
   	return null;
   }
   
}
