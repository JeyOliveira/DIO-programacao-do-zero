class heroi{
    constructor (nomeHeroi, idadeHeroi, classeHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.classeHeroi = classeHeroi
    }

atacar (){
    let ataque;
    
    switch(this.classeHeroi) {
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
    console.log(`O ${this.classeHeroi} atacou usando ${ataque}`);
}
}

let heroiMago = new heroi ("Nami", "29", "mago")
heroiMago.atacar();