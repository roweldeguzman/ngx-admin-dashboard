import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	public add(name, data: any) {
		if (this.isExist(name)) { this.remove(name); }
		localStorage.setItem(name, JSON.stringify(data));
	}
	public get(name){
		try { return JSON.parse(localStorage.getItem(name)); }
		catch (e) { return ''; }
	}
	public remove(name) {
		if (this.isExist(name)) { localStorage.removeItem(name); }
	}
	public isExist(name) {
		let item = localStorage.getItem(name);
		if (item !== null) { return true; }
		else { return false; }
	}
}