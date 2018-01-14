import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RgLineDirective } from '../directives/rg-line.directive';
import { ToggleSubmenuDirective } from '../directives/toggle-submenu.directive'
import { WavesEffectDirective } from '../directives/waves-effect.directive';
import { SelectizeDirective } from '../directives/selectize.directive';
import { SwitchDirective } from '../directives/switch.directive';
import { InputMaskDirective } from '../directives/input-mask.directive';
import { StopPropagateDirective } from '../directives/stop-propagate.directive';
import { SparkLineDirective } from '../directives/spark-line.directive';
import { EasyPieDirective } from '../directives/easy-pie.directive';


import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
	imports:[ 
		CommonModule,
		DatepickerModule.forRoot(),
		BsDropdownModule.forRoot(),
		CarouselModule.forRoot(),
		ModalModule.forRoot(),
		ButtonsModule.forRoot(),
		CollapseModule.forRoot(),
		PaginationModule.forRoot(),
		PopoverModule.forRoot(),
		ProgressbarModule.forRoot(),
		TabsModule.forRoot(),
		TypeaheadModule.forRoot(),
		TooltipModule.forRoot(),
		AlertModule.forRoot()
		
	],
	declarations: [
		RgLineDirective,
		ToggleSubmenuDirective,
		WavesEffectDirective,
		SelectizeDirective,
		SwitchDirective,
		InputMaskDirective,
		StopPropagateDirective,
		SparkLineDirective,
		EasyPieDirective
	],
	exports:[
		CommonModule,
		DatepickerModule,
		BsDropdownModule,
		CarouselModule,
		ModalModule,		 
		FormsModule,
		ButtonsModule,
		CollapseModule,
		PaginationModule,
		PopoverModule,
		ProgressbarModule,
		TabsModule,
		TypeaheadModule,
		TooltipModule,
		AlertModule,

		
		RgLineDirective,
		ToggleSubmenuDirective,
		WavesEffectDirective,
		SelectizeDirective,
		SwitchDirective,
		InputMaskDirective,
		StopPropagateDirective,
		SparkLineDirective,
		EasyPieDirective
	]
})
export class SharedModule {}