class heroi{
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }

atacar (){
    let ataque;
    
    switch(this.tipoHeroi) {
        case "mago" : 
        ataque = "usou magia!";
        break;
        case "guerreiro" : 
        ataque = "usou espada!";
        break;
        case "monge" : 
        ataque = "usou artes marciais!";
        break;
        case "ninja" : 
        ataque = "usou shuriken!";
        break;
        default:
            ataque = "usou um ataque desconhecido !";
    }
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
}
}

let heroiMago = new heroi ("Nami", "29", "mago")
heroiMago.atacar();