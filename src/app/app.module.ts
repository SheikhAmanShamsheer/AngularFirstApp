import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';
import { AddModule } from './add/add.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AddModule,
    CustomersModule,
    CoreModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    OrdersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
