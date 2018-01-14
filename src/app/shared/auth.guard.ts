import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router) { }

	canActivate() {
		if (localStorage.getItem('isLock')) {
			this.router.navigate(['lock-screen']);
			return false;
		} else if (localStorage.getItem('isLogin')){
			this.router.navigate(['login']);
			return false;
		} else if (localStorage.getItem("isLogin2")){
			this.router.navigate(['loginSecond']);
			return false;
		}

		return true;
	}
}
