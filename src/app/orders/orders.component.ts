import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer | null = null;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.dataService.getOrders(id).subscribe((orders:IOrder[])=>{
      console.log(orders);
        this.orders = orders;
    })

    this.dataService.getCustomer(id).subscribe((customer: ICustomer|null) => {
      this.customer = customer;
    });
  }

}