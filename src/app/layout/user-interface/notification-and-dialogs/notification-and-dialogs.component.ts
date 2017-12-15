import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../../../BaseComponent';

declare let swal: any;
@Component({
  selector: 'app-notification-and-dialogs',
  templateUrl: './notification-and-dialogs.component.html',
  styleUrls: ['./notification-and-dialogs.component.css']
})
export class NotificationAndDialogsComponent extends BaseComponent implements OnInit {
	
	constructor(public injector: Injector) { super(injector); }
	
	ngOnInit() {

	}

	public makeNotif(ev){
		let target	= 	ev.target,
			attr 	= 	target.attributes,
			type 	= 	attr["data-type"].value,
			from 	=	attr["data-from"].value,
			align 	=	attr["data-align"].value;

		this.service.notify(" Bootstrap Growl Turning standard Bootstrap alerts into awesome notifications", type, {
			from: from,
			align: align
		},{
			enter: 'animated bounceIn',
			exit: 'animated bounceOut'
		})
	}
	public makeNotifAnim(ev){
		
		let target = ev.target,
			attr = target.attributes,
			type = attr["data-type"].value,
			animIn = attr["data-animation-in"].value,
			animOut = attr["data-animation-Out"].value;

		this.service.notify(" Bootstrap Growl Turning standard Bootstrap alerts into awesome notifications", type, {
			from: 'top',
			align: 'right'
		}, {
			enter: animIn,
			exit: animOut
		})
	}

	public makeSwal(type){
		if (type == 'basic'){
			swal("Here's a message!");
		} else if (type == 'txt'){
			swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis")
		} else if (type == 'success'){
			swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis", "success")
		} else if (type == 'warning'){
			swal({
				title: "Are you sure?",
				text: "You will not be able to recover this imaginary file!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false
			}, function () {
				swal("Deleted!", "Your imaginary file has been deleted.", "success");
			});
		} else if (type == 'param'){
			swal({
				title: "Are you sure?",
				text: "You will not be able to recover this imaginary file!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				cancelButtonText: "No, cancel plx!",
				closeOnConfirm: false,
				closeOnCancel: false
			}, function (isConfirm) {
				if (isConfirm) {
					swal("Deleted!", "Your imaginary file has been deleted.", "success");
				} else {
					swal("Cancelled", "Your imaginary file is safe :)", "error");
				}
			});
		} else if (type == 'img'){
			swal({
				title: "Sweet!",
				text: "Here's a custom image.",
				imageUrl: "./assets/img/thumbs-up.png"
			});
		} else if (type == 'timer'){
			swal({
				title: "Auto close alert!",
				text: "I will close in 2 seconds.",
				timer: 2000,
				showConfirmButton: false
			});
		}
	}
}
