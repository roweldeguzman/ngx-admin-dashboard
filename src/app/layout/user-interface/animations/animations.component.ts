import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
	selector: 'app-animations',
	templateUrl: './animations.component.html',
	styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
	constructor() { }
	ngOnInit() {

	}
	public attentionSeekers = [
		{ animation: 'bounce', target: 'attentionSeeker' },
		{ animation: 'flash', target: 'attentionSeeker' },
		{ animation: 'pulse', target: 'attentionSeeker' },
		{ animation: 'rubberBand', target: 'attentionSeeker' },
		{ animation: 'shake', target: 'attentionSeeker' },
		{ animation: 'swing', target: 'attentionSeeker' },
		{ animation: 'tada', target: 'attentionSeeker' },
		{ animation: 'wobble', target: 'attentionSeeker' }
	]
	public flippers = [
		{ animation: 'flip', target: 'flippers' },
		{ animation: 'flipInX', target: 'flippers' },
		{ animation: 'flipInY', target: 'flippers' },
		{ animation: 'flipOutX', target: 'flippers' },
		{ animation: 'flipOutY', target: 'flippers' }
	]
	public lightSpeed = [
		{ animation: 'lightSpeedIn', target: 'lightSpeed' },
		{ animation: 'lightSpeedOut', target: 'lightSpeed' }
	]
	public special = [
		{ animation: 'hinge', target: 'special' },
		{ animation: 'rollIn', target: 'special' },
		{ animation: 'rollOut', target: 'special' }
	]
	public bouncingEntrance = [
		{ animation: 'bounceIn', target: 'bouncingEntrance' },
		{ animation: 'bounceInDown', target: 'bouncingEntrance' },
		{ animation: 'bounceInLeft', target: 'bouncingEntrance' },
		{ animation: 'bounceInRight', target: 'bouncingEntrance' },
		{ animation: 'bounceInUp', target: 'bouncingEntrance' }
	]
	public bouncingExits = [
		{ animation: 'bounceOut', target: 'bouncingExits' },
		{ animation: 'bounceOutDown', target: 'bouncingExits' },
		{ animation: 'bounceOutLeft', target: 'bouncingExits' },
		{ animation: 'bounceOutRight', target: 'bouncingExits' },
		{ animation: 'bounceOutUp', target: 'bouncingExits' }
	]
	public rotatingEntrances = [
		{ animation: 'rotateIn', target: 'rotatingEntrances' },
		{ animation: 'rotateInDownLeft', target: 'rotatingEntrances' },
		{ animation: 'rotateInDownRight', target: 'rotatingEntrances' },
		{ animation: 'rotateInUpLeft', target: 'rotatingEntrances' },
		{ animation: 'rotateInUpRight', target: 'rotatingEntrances' }
	]
	public rotatingExits = [
		{ animation: 'rotateOut', target: 'rotatingExits' },
		{ animation: 'rotateOutDownLeft', target: 'rotatingExits' },
		{ animation: 'rotateOutDownRight', target: 'rotatingExits' },
		{ animation: 'rotateOutUpLeft', target: 'rotatingExits' },
		{ animation: 'rotateOutUpRight', target: 'rotatingExits' }
	]
	public fadeingEntrances = [
		{ animation: 'fadeIn', target: 'fadeingEntrances' },
		{ animation: 'fadeInDown', target: 'fadeingEntrances' },
		{ animation: 'fadeInDownBig', target: 'fadeingEntrances' },
		{ animation: 'fadeInLeft', target: 'fadeingEntrances' },
		{ animation: 'fadeInLeftBig', target: 'fadeingEntrances' },
		{ animation: 'fadeInRight', target: 'fadeingEntrances' },
		{ animation: 'fadeInRightBig', target: 'fadeingEntrances' },
		{ animation: 'fadeInUp', target: 'fadeingEntrances' },
		{ animation: 'fadeInBig', target: 'fadeingEntrances' }
	]
	public fadeingExits = [
		{ animation: 'fadeOut', target: 'fadeingExits' },
		{ animation: 'fadeOutDown', target: 'fadeingExits' },
		{ animation: 'fadeOutDownBig', target: 'fadeingExits' },
		{ animation: 'fadeOutLeft', target: 'fadeingExits' },
		{ animation: 'fadeOutLeftBig', target: 'fadeingExits' },
		{ animation: 'fadeOutRight', target: 'fadeingExits' },
		{ animation: 'fadeOutRightBig', target: 'fadeingExits' },
		{ animation: 'fadeOutUp', target: 'fadeingExits' },
		{ animation: 'fadeOutUpBig', target: 'fadeingExits' }
	]
	public zoomEntrances = [
		{ animation: 'zoomIn', target: 'zoomEntrances' },
		{ animation: 'zoomInDown', target: 'zoomEntrances' },
		{ animation: 'zoomInLeft', target: 'zoomEntrances' },
		{ animation: 'zoomInRight', target: 'zoomEntrances' },
		{ animation: 'zoomInUp', target: 'zoomEntrances' }
	]
	public zoomExits = [
		{ animation: 'zoomOut', target: 'zoomExits' },
		{ animation: 'zoomOutDown', target: 'zoomExits' },
		{ animation: 'zoomOutLeft', target: 'zoomExits' },
		{ animation: 'zoomOutRight', target: 'zoomExits' },
		{ animation: 'zoomOutUp', target: 'zoomExits' }
	]

//Animate
	public ca = '';
	public animationDuration;
	public setAnimation = function (animation, target) {
		if (animation === "hinge") {
			this.animationDuration = 2100;
		}
		else {
			this.animationDuration = 1200;
		}

		$('#' + target).addClass(animation);
		setTimeout(function() {
			$('#' + target).removeClass(animation);
		}, this.animationDuration);
	}
}
