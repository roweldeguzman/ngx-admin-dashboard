/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterfaceComponent } from './user-interface.component';

/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '',
		component: UserInterfaceComponent,
		children: [
			{
				path: 'ui-bootstrap',
				loadChildren: './ui-bootstrap/ui-bootstrap.module#UiBootstrapModule'
			}, {
				path: 'colors',
				loadChildren: './colors/colors.module#ColorsModule'
			}, {
				path: 'animations',
				loadChildren: './animations/animations.module#AnimationsModule'
			}, {
				path: 'box-shadow',
				loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
			}, {
				path: 'buttons',
				loadChildren: './buttons/buttons.module#ButtonsModule'
			}, {
				path: 'icons',
				loadChildren: './icons/icons.module#IconsModule'
			}, {
				path: 'alerts',
				loadChildren: './alerts/alerts.module#AlertsModule'
			}, {
				path: 'notification-and-dialogs',
				loadChildren: './notification-and-dialogs/notification-and-dialogs.module#NotificationAndDialogsModule'
			}, {
				path: 'media',
				loadChildren: './media/media.module#MediaModule'
			}, {
				path: 'modal',
				loadChildren: './modal/modal.module#ModalModule'
			}
		]
	}, { path: '**', redirectTo: 'ui-bootstrap' }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [UserInterfaceComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class UserInterfaceModule { }

