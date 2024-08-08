import { Component,OnInit } from '@angular/core';
import { ICustomer } from '../shared/interface';
import { DataService } from '../core/data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title:string = "";
  people:ICustomer[] = [];
  
  constructor(private dataService: DataService,private router: Router){
    
  }
  ngOnInit(): void {
    this.title = "Customers";
    this.gCustomers();
  }


  private gCustomers(){
    this.dataService.getCustomers()
      .subscribe({
        next: (response) => {
          this.people = response;
        }
      });
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.handleNavigationEnd(event);
        }
      });
  }
  private handleNavigationEnd(event: NavigationEnd): void {
    // Your function to be executed when navigation ends
    // console.log('Navigated to:', event.urlAfterRedirects);
    this.gCustomers();
    // Call your function here
  }
}
