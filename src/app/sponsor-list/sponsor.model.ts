export class Sponsor {
	private _id: number;
	private _nom: String;
	private _prenom: String;
	private _nomSte: String;
    private _typeSponsoring: String;
    
	get id(): number {
		return this._id;
	}
	set id(value: number) {
		this._id = value;
	}
	get nom(): String {
		return this._nom;
	}
	set nom(value: String) {
		this._nom = value;
	}
	get prenom(): String {
		return this._prenom;
	}
	set prenom(value: String) {
		this._prenom = value;
	}
	get nomSte(): String {
		return this._nomSte;
	}
	set nomSte(value: String) {
		this._nomSte = value;
    }
    get getTypeSponsoring(): String {
		return this._typeSponsoring;
	}
	set getTypeSponsoring(value: String) {
		this._typeSponsoring = value;
	}
}