import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../../../BaseComponent';

declare let $: any;

@Component({
	selector: 'app-widget',
  	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.css']
})
export class WidgetComponent extends BaseComponent implements OnInit {
	constructor(public injector: Injector) { super(injector) }
	ngOnInit() {

	}
	public tabActive: number = 1;
	private selectTab(tab: number) {
		this.tabActive = tab;
	}

	public lists = [
		{
			"id": 1,
			"todo": "Duis vitae nibh molestie pharetra augue vitae"
		},{
			"id": 2,
			"todo": "In vel imperdiet leoorbi mollis leo sit amet quam fringilla varius mauris orci turpis"
		},{
			"id": 3,
			"todo": "Suspendisse quis sollicitudin erosvel dictum nunc"
		},{
			"id": 4,
			"todo": "Curabitur egestas finibus sapien quis faucibusras bibendum ut justo at sagittis. In hac habitasse platea dictumst"
		},{
			"id": 5,
			"todo": "Suspendisse potenti. Cras dolor augue, tincidunt sit amet lorem id, blandit rutrum libero"
		},{
			"id": 6,
			"todo": "Proin luctus dictum nisl id auctor. Nullam lobortis condimentum arcu sit amet gravida"
		}
	]

	public initLastId	=	6;
	public todoValue	=	"";
	public newTodo(ev){
		$(ev.target).parent().toggleClass("toggled");
	}
	public dismiss(ev){
		$(ev.target).parents("#add-tl-item").toggleClass("toggled");
	}
	public addTodo(ev){
		if (this.todoValue.trim().length > 0){
			this.initLastId++;
			this.lists.push({
				"id": this.initLastId,
				"todo": this.todoValue
			})
			this.service.notify("Todo added", "success");
			$(ev.target).parents("#add-tl-item").toggleClass("toggled");
			this.todoValue = "";
		} else {
			this.service.notify("Todo is empty", "warning");
		}
	}
	public removeTodo(todoId){
		this.lists.forEach((e, i)=>{
			if (e.id == todoId){
				this.lists.splice(i, 1)
			}
		});
	}
}
