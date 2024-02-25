import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';
import { PostComponent } from './Components/post/post.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UserComponent } from './Components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { AddItemComponent } from './Components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AddItemComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({cartCount: cartReducer}, {})
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
