/* Angular */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Component */
import { GalleryComponent } from './gallery.component';
/* Router */
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
	{
		path: '', 
		component: GalleryComponent,
		children:[
			{
				path: 'default',
				loadChildren: './default/default.module#DefaultModule'
			},{
				path: 'timeline',
				loadChildren: './timeline/timeline.module#TimelineModule'
			}
		]
	}, {
		path: '**', 
		redirectTo: 'default'
	}
];


@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	declarations: [GalleryComponent]
})
export class GalleryModule { }

