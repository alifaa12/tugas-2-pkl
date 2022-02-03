class kegiatan {
    constructor (pagi, siang, malam){
    this.Pagi = pagi;
    this.Siang = siang;
    this.Malam = malam;
}
mandi(mandii){
    if (mandii == "seger"){
        console.log("brushhh");
    }
    else {
        console.log("watchu");
    }
}
makan(makanan){
    if (makanan == "enak"){
        console.log("wah");
    }
    else {
        console.log("yeuh");
    }
}
tidur(tiduran){
    if (tiduran == "nyaman"){
        console.log("uahhh");
    }
    else {
        console.log("nyeh");
    }
}
}
var kegiatan1 = new kegiatan("pagi", "siang", "malam")
kegiatan1.mandi("seger");
