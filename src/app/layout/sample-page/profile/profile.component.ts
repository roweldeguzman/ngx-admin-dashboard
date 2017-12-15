import { 
	Component, 
	OnInit, 
	ViewChild, 
	ViewContainerRef,
	Compiler,
	ComponentFactoryResolver
} from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(
		public compile: Compiler,
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	@ViewChild('placeholder', { read: ViewContainerRef }) placeholder: ViewContainerRef;

	ngOnInit() {

	}
	
	public createComponentFactory(component){
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);	
		this.placeholder.clear();
		let componentRef = this.placeholder.createComponent(componentFactory);
	}

	public tabActive: number = 1;
	private selectTab(tab: number) {
		this.tabActive = tab;
	}
}
