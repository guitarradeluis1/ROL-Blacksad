/*
Credo por Luis Bernal (guitarradeluis@gmail.com)
Si modificar el codigo fuente no borres mi nombre agrega el tuyo y compartelo
*/

/**
 * sistema base para personajes o NPC
 * @description Solo busca crear una instancia facil de editar
 * @param {string} tipo (true = jugador | false = NPC)
 */
var Jugador = function(tipo){
	this.id = ((new Date()).getTime() * parseInt((Math.random()*1000)));
	this.live = true;
	this.x = 20;
	this.y = 20;
	this.oro = 0;
	this.jugador = tipo;
	this.nombre = tipo? prompt("Personaje:", ""): '';
	this.personaje = prompt("Nombre:", "");
	this.nivel = 0;
	this.experiencia = 0;
	if(tipo){
		var tmp =  prompt("Tipo [0: Acechadores, 1: Arañas, 2: Masáscaras, 3: Sabuesos, 4: Sajadores, 5: Sanguijuelas, 6: Susurros]", "");
		switch(parseInt(tmp)){
			case 0:
				this.raza = {id: 0, nombre:'Acechadores', mov: 0};
			break;
			case 1:
				this.raza = {id: 1, nombre:'Arañas', mov: 0};
			break;
			case 2:
				this.raza = {id: 2, nombre:'Masáscaras', mov: 0};
			break;
			case 3:
				this.raza = {id: 3, nombre:'Sabuesos', mov: 0};
			break;
			case 4:
				this.raza = {id: 4, nombre:'Sajadores', mov: 0};
			break;
			case 5:
				this.raza = {id: 5, nombre:'Sanguijuelas', mov: 0};
			break;
			case 6:
				this.raza = {id: 6, nombre:'Susurros', mov: 0};
			break;
			default:
				this.raza = {id: 6, nombre:'Susurros', mov: 0};
		}
		var tmp =  prompt("Banda [0: Asesinos, 1: Bravos, 2: Buhoneros, 3: Contrabandistas, 4: Secta, 5: Sombras]", "");
		switch(parseInt(tmp)){
			case 0:
				this.clase = {id: 0, nombre:'Asesinos', da: 0};
			break;
			case 1:
				this.clase = {id: 1, nombre:'Bravos', da: 0};
			break;
			case 2:
				this.clase = {id: 2, nombre:'Buhoneros', da: 0};
			break;
			case 3:
				this.clase = {id: 3, nombre:'Contrabandistas', da: 0};
			break;
			case 4:
				this.clase = {id: 4, nombre:'Secta', da: 0};
			break;
			case 5:
				this.clase = {id: 5, nombre:'Sombras', da: 0};
			break;
			default:
				this.clase = {id: 5, nombre:'Sombras', da: 0};
		}
	}
	this.talentos = [];
	this.transfondos = prompt("Transfondos:", "");;
	this.armas = [];
	this.habilidades = [
		{nombre:'Acechar', puntos: 0, des: ''},
		{nombre:'Afinar', puntos: 0, des: ''},
		{nombre:'Analizar', puntos: 0, des: ''},
		{nombre:'Armonizar', puntos: 0, des: ''},
		{nombre:'Cazar', puntos: 0, des: ''},
		{nombre:'Destrozar', puntos: 0, des: ''},
		{nombre:'Estudiar', puntos: 0, des: ''},
		{nombre:'Influir', puntos: 0, des: ''},
		{nombre:'Mandar', puntos: 0, des: ''},
		{nombre:'Pelear', puntos: 0, des: ''},
		{nombre:'Socializar', puntos: 0, des: ''},
		{nombre:'Trastear', puntos: 0, des: ''},
	];
	this.datos = [
		{nombre:'Fuerza', pref:'FU', puntos: 0},
		{nombre:'Destreza', pref:'DES', puntos: 0},
		{nombre:'Constitucion', pref:'CON', puntos: 0},
		{nombre:'Inteligencia', pref:'INT', puntos: 0},
		{nombre:'Sabiduria', pref:'SAB', puntos: 3},
		{nombre:'Carisma', pref:'CAR', puntos: 0},
	];
	//this.imagen = prompt("Imagen:", "");
	this.color =  "";//prompt("Color (ingles):", "");
	this.vida = tipo? '':prompt("Vida :", "");
};

/**
 * @description Desavilitar personaje
 */
Jugador.prototype.eliminar = function(){
	if (confirm(`Seguro quiere eliminar a ${this.personaje}`)) {
		this.live = false;
	} else {
	}
}

/**
 * @description Cambia cantidad de oro
 */
Jugador.prototype.setOro = function(){
	var tmp = prompt(`Oro (${this.oro})`, `${this.oro}`);
	this.oro = parseInt(tmp);
}

/**
 * @description Cambia color
 */
Jugador.prototype.setcolor = function(co){
	this.color = co;
}

/**
 * @description Cambia color
 */
Jugador.prototype.setVida = function(){
	var tmp = prompt(`Vida (${this.vida})`, `${this.vida}`);
	this.vida = parseInt(tmp);
}

/**
 * @description Cambia cantidad de experiencia y suvida de niles (10 = + 1NV)
 */
Jugador.prototype.setExp = function(){
	var tmp = prompt(`NV/Exp (${this.nivel}/${this.experiencia})`, ``);
	this.experiencia = this.experiencia + parseInt(tmp);
	if(this.experiencia >= 10){
		this.experiencia = this.experiencia - 10;
		this.nivel = this.nivel + 1;
		alert(`<b>${this.personaje}</b> subió al nivel ${this.nivel}`);
	}
}

/**
 * @description Cambia la posicion que ubica (canvas)
 * @param {float} x
 * @param {float} y
 */
Jugador.prototype.setPosition = function(x, y){
	//var tmp = prompt(`X:`, `${this.x}`);
	this.x = parseFloat(x);
	//var tmp = prompt(`Y:`, `${this.y}`);
	this.y = parseFloat(y);
}

/**
 * @description Cambia datos acorde a su nombre
 * @param {string} nombre
 */
Jugador.prototype.setDatos = function(nombre){
	this.datos.map(ha=>{
		if(ha.nombre == nombre){
			var tmp = prompt(`${ha.nombre}`, `${ha.puntos}`);
			ha.puntos = parseInt(tmp);
		}
	});
}

/**
 * @description Cambia habilidad acorde a su nombre
 * @param {string} nombre
 */
Jugador.prototype.setHabilidades = function(nombre){
	this.habilidades.map(ha=>{
		if(ha.nombre == nombre){
			var tmp = prompt(`${ha.nombre} puntos`, `${ha.puntos}`);
			ha.puntos = parseInt(tmp);
			//var tmp = prompt(`${ha.nombre} descripción`, `${ha.des}`);
			//ha.des = tmp;
		}
	});
}

/**
 * @returns {number} vida PV
 */
Jugador.prototype.pv = function(id){
	//let obj = this;
	if(this.tipo){
		var nombreClase = this.clase.filter(cl => cl.id == this.claseId);
		var cont = this.datos.filter(da => da.pref == 'CON');
		//console.log(`${(nombreClase[0].da + cont[0].puntos)} (${nombreClase[0].da}DA + ${cont[0].puntos}CON)`);
		//return `${(nombreClase[0].da + cont[0].puntos)} (${nombreClase[0].da}DA + ${cont[0].puntos}CON)`;
		return (nombreClase[0].da + cont[0].puntos);
	}else{
		return this.vida;
	}
}

/**
 * @returns {number} movimiento MOV
 */
Jugador.prototype.mov = function(id){
	//let obj = this;
	return this.id;
}

/**
 * @returns {number} defensa DEF
 */
Jugador.prototype.def = function(id){
	//let obj = this;
	return this.id;
}

/**
 * @returns {number} ataque ATQ
 */
Jugador.prototype.atq = function(id){
	//let obj = this;
	return this.id;
}

/**
 * @returns {number} instinto INS
 */
Jugador.prototype.ins = function(id){
	//let obj = this;
	return this.id;
}

/**
 * @returns {number} poder POD
 */
Jugador.prototype.pod = function(id){
	//let obj = this;
	return this.id;
}

Jugador.prototype.addArma = function(){
	var nombre = prompt(`Nombre de la nueva Arma`, ``);
	var puntos = prompt(`Puntaje (3, 2....)`, ``);
	puntos = parseInt(puntos);
	var peso = prompt(`Peso (3, 2....)`, ``);
	peso = parseInt(peso);
	var id = ((new Date()).getTime() * parseInt((Math.random()*1000)));
	this.armas.push({id, nombre, puntos, peso});
}

Jugador.prototype.editArma = function(id){
	var puntos = prompt(`Puntaje (3, 2....)`, ``);
	puntos = parseInt(puntos);
	var peso = prompt(`Peso (3, 2....)`, ``);
	peso = parseInt(peso);
	this.armas.filter(ar=>{
		if(ar.id == id){
			ar.puntos = puntos;
			ar.peso = peso;
		}
	});
}

Jugador.prototype.deleteArma = function(id){
	if (confirm("Seguro quieres eliminar el arma?")) {
		this.armas = this.armas.filter(ar => ar.id !== id);
	}
}


//var opcion = prompt("Introduzca su nombre:", "Aner Barrena")
/*
var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}*/