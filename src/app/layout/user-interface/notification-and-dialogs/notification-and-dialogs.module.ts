/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
/* Component */
import { NotificationAndDialogsComponent } from './notification-and-dialogs.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', component: NotificationAndDialogsComponent
  	}, {
		path: '**', component: NotificationAndDialogsComponent
  	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
  	],
	declarations: [NotificationAndDialogsComponent],
  	schemas: [NO_ERRORS_SCHEMA]
})
export class NotificationAndDialogsModule { }


