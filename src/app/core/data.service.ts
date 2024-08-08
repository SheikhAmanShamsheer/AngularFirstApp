import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {_throw} from 'rxjs/observable/throw';

import { map, catchError } from 'rxjs/operators';
import { ICustomer,IOrder } from '../shared/interface';

@Injectable()
export class DataService {

    baseUrl: string = 'http://localhost:3000/';
    data:ICustomer[] = [];
    constructor(private http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> { //
      return this.http.get<ICustomer[]>(this.baseUrl+'data')
          .pipe(
            map(customers=>{
              this.data = customers;
              return customers
            }),
          );
      
    }

    getCustomer(id: number) : Observable<ICustomer|null> {
        return this.http.get<ICustomer[]>(this.baseUrl+'data')
          .pipe(
            map(customers => {
              let customer = customers.filter((cust: ICustomer) => cust.id === id);
              return (customer && customer.length) ? customer[0] : null;
            }),
            catchError(this.handleError)
          )
    }

    getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl+'orders')
            .pipe(
            map(orders => {
                let custOrders = orders.filter((order: IOrder) => order.customerId === id);
                return custOrders;
            }),
            catchError(this.handleError)
            );
    }

    addCustomer(object: ICustomer): void{
      object.id = 5;
      console.log(object)
      
      let url = this.baseUrl+'addData';
      console.log(url);
      let res = this.http.post<ICustomer>(url,object)
      .pipe(
        catchError(this.handleError)
      ).subscribe(
        response => {
          console.log('Customer added:', response);
        }
      );
    }



    private handleError(error: any) {
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return _throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return _throw(error || 'Node.js server error');
    }

}