import { Component,OnInit,Output,EventEmitter,Input } from '@angular/core';
import { DataService } from '../core/data.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})

export class AddComponent implements OnInit  {
  
  private _name: string = "";
  private _city: string = "";
  private _orderTotal: number = 0;

  @Input() get name() {
      return this._name;
  }

  get city() {
    return this._city;
  }

  get orderTotal(){
    return this._orderTotal
  }
  
  set name(val: string) { 
    this._name = val;
    this.changed.emit(this._name); //Raise changed event
  }

  set city(val: string) { 
    this._city = val;
    this.changed.emit(this._city); //Raise changed event
  }

  set orderTotal(val: number) { 
    this._orderTotal = val;
    this.changed.emit(this._orderTotal); //Raise changed event
  }


  @Output() changed: EventEmitter<any> = new EventEmitter<any>();
  

  

  constructor(private dataService: DataService){}

  add(){
    console.log(this.name,this.city,this.orderTotal)
    if(this.name && this.city && this.orderTotal){
      this.dataService.addCustomer({id:-1,name:this.name,city:this.city,orderTotal:Number(this.orderTotal),customerSince:2019});
    }else{
      alert("All fields are mandatory");
    }
  }

  ngOnInit(): void {

  }
}
