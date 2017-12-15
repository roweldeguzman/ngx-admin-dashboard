import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ServiceService } from './services/service.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent
  	],
  	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
  	],
  	providers: [ServiceService],
  	bootstrap: [AppComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
