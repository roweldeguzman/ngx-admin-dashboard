import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { LayoutComponent }      from './layout.component';
import { HeaderComponent }      from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

const routes: Routes = [
	{
		path: '', component: LayoutComponent,
		children:[
			{ path: 'home', loadChildren: './home/home.module#HomeModule' },
			{ path: 'about', loadChildren: './about/about.module#AboutModule' },
			{ path: 'typography', loadChildren: './typography/typography.module#TypographyModule'},
			{ path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule'},
			{ path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
			{ path: 'forms', loadChildren: './forms/forms.module#FormsModule'},
			{ path: 'user-interface', loadChildren: './user-interface/user-interface.module#UserInterfaceModule' },
			{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
			{ path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
			{ path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
			{ path: 'generic-classes', loadChildren: './generic/generic.module#GenericModule' },
			{ path: 'sample-page', loadChildren: './sample-page/sample-page.module#SamplePageModule' }
		]
	},{
		path: 'login',
        loadChildren: '../login/login.module#LoginModule',
	},{
		path: 'signup',
        loadChildren: '../signup/signup.module#SignupModule',
	}, {
		path: 'forgot-password',
		loadChildren: '../forgot-password/forgot-password.module#ForgotPasswordModule',
	}, {
		path: 'lock-screen',
		loadChildren: '../lock-screen/lock-screen.module#LockScreenModule',
	}, {
		path: '**', redirectTo: "/"
	}
];

@NgModule({
    imports: [
    	RouterModule.forChild(routes),
		CommonModule,
		SharedModule,
		PerfectScrollbarModule
    ],
    declarations: [
        LayoutComponent,
		HeaderComponent,
		SidebarComponent
	],
	providers: [{
    	provide: PERFECT_SCROLLBAR_CONFIG,
      	useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
