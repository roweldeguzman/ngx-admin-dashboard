import { Injectable } from '@angular/core';


declare let $: any;
declare let window: any
@Injectable()
export class ServiceService {
	constructor() { }
	
	/**
	 * 
	 * @param needle	string
	 * @param haystack 	array
	 * 
	 * @returns boolean
	 */
	public in_array(needle: any, haystack: any){
        for(var i in haystack) {
            if(haystack[i] == needle) return true;
        }
        return false;
	}
	/**
	 * 
	 * @param message string
	 * @param type string
	 * @param placement object
	 * @param anim objec 
	 * @returns jquery alert growl
	 */
	public notify(message, type, placement = null, anim = null) {
		// if (document.getElementsByClassName('growl-animated').length != 0) {
		// 	document.getElementsByClassName('growl-animated')[0].remove();
		// }
		let defPlace = {			
			from: 'top',
			align: 'center'
		};
		let defAnim	=	{
			enter: 'animated bounceIn',
			exit: 'animated bounceOut'
		}
		$.growl({
			message: message
		}, {
			z_index: 1080,
			type: type,
			allow_dismiss: true,
			mouse_over: "pause",
			label: 'Cancel',
			className: 'btn-xs btn-inverse',
			placement: placement == null && typeof placement !== "object" ? defPlace : placement,
			delay: 2500,
			spacing: 10,
			animate: anim == null && typeof anim !== "object" ? defAnim : anim ,
			offset: {
				x: 20,
				y: 85
			}
		});
	}
	public getParent(parentNode, childeNode, type) {
		var obj = childeNode.parentNode;
		if (type == 'tag' || type == null) {
			while (obj.tagName != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'id') {
			while (obj.id != parentNode) {
				obj = obj.parentNode;
			}
		}
		else if (type == 'class') {
			while (obj.classList.contains(parentNode) === false) {
				obj = obj.parentNode;
			}
		}
		return obj;
	}
	public closest(el, selector) {
		var matchesFn;

		// find vendor prefix
		['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
			if (typeof document.body[fn] == 'function') {
				matchesFn = fn;
				return true;
			}
			return false;
		})

		var parent;

		// traverse parents
		while (el) {
			parent = el.parentElement;
			if (parent && parent[matchesFn](selector)) {
				return parent;
			}
			el = parent;
		}

		return null;
	}	


}
