/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Component */
import {ContactComponent } from './contact.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: ContactComponent
	},{
		path: '**', component: ContactComponent
	}
];
  

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
  	],
  	declarations: [ContactComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class ContactModule { }
