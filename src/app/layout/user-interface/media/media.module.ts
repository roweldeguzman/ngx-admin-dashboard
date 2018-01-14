/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { MediaComponent } from './media.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: MediaComponent
  	}, {
		path: '**', component: MediaComponent
  	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
  	declarations: [MediaComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class MediaModule { }


