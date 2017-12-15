import {
	Component,
	Inject,
	forwardRef,
	Compiler,
	NgModule,
	Injectable,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
/* Shared */
import { SharedModule } from './shared.module';
@Injectable()
export class DynamicBuilder {
	constructor(private compiler: Compiler) { }
	public createComponent(template, DynamicComponent, container, resetContainer = true): any {

		@Component({
			selector: "dynamic-content",
			template: template
		})

		class TemplateComponent {

			constructor( @Inject(forwardRef(() => DynamicComponent)) private _parent) { }
			public parent = this._parent;
		}

		@NgModule({
			imports: [SharedModule],
			declarations: [TemplateComponent],
		})
		class TemplateModule { }

		const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
		const factory = mod.componentFactories.find((comp) =>
			comp.componentType === TemplateComponent
		);

		if (resetContainer) { container.clear(); }

		const component = container.createComponent(factory);

		return TemplateComponent;
	}
}
