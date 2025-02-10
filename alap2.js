let sz=""
let szamlalo=1
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
        sz+=`<img id="${szamlalo}" onmouseover="szegelyRajzol(this.id)" onmouseleave="szegelylevesz(this.id)" onclick="nagyit(this.id)" src="a${szamlalo}.jpg " alt="" style="width:100px;margin:5px;border:2px solid white">`
        szamlalo++
    }
    sz+=` <br> `

}
document.getElementById("kepekHelye").innerHTML=sz
let megoldas=""
let aktsorszam=-1
let elozo=-1
let helyes=0
let osszes=0

function nagyit(id){
    aktsorszam=id
    if (elozo!=-1) {
        document.getElementById(elozo).style.filter="invert(0%)"
        document.getElementById(elozo).style.border="0px solid black"
    }
    document.getElementById(id).style.filter="invert(100%)"
    document.getElementById(id).style.border="2px solid green"

    elozo=id

    document.getElementById("nagykep").innerHTML=`<img src="a${id}.jpg" alt="" style="width:640px;filer: invert"></img>`

    //Tömbből kiszedni az adatokat, bekeverni, gombra rátenni
    megoldas=nevekTomb[id-1].megoldas
    let keveres=[]
    keveres.push(nevekTomb[id-1].megoldas)
    keveres.push(nevekTomb[id-1].tipp1)
    keveres.push(nevekTomb[id-1].tipp2)
    keveres.push(nevekTomb[id-1].tipp3)
    console.log(keveres)
    for (let i = 0; i < 100; i++) {
        let rszam1=Math.floor(Math.random() *4)
        let rszam2=Math.floor(Math.random() *4)
        //console.log(rszam1)
        let cserepohar=keveres[rszam1]
        keveres[rszam1]=keveres[rszam2]
        keveres[rszam2]=cserepohar
        console.log(keveres)
    }


    document.getElementById("ki").innerHTML=`"Ki ez a híres személyíség?"
    <br>
    <button onclick="gombKattintas('${keveres[0]}')">${keveres[0]}</button>
    <button onclick="gombKattintas('${keveres[1]}')">${keveres[1]}</button>
    <button onclick="gombKattintas('${keveres[2]}')">${keveres[2]}</button>
    <button onclick="gombKattintas('${keveres[3]}')">${keveres[3]}</button>
    `
}
function szegelyRajzol(id) {
    document.getElementById(id).style.border="2px solid blue"

}
function szegelylevesz(id) {
    if (id==aktsorszam)
        document.getElementById(id).style.border="2px solid green"
    else
        document.getElementById(id).style.border="2px solid white"
}
function gombKattintas(aktualisFelirat){
    //alert(aktualisFelirat)
    //alert(megoldas)
    osszes++
    if (megoldas==aktualisFelirat)
        {
        helyes++;
        alert("Helyes válasz!")
            if (aktsorszam==nevekTomb.length)
                aktsorszam=1
            else
                aktsorszam++
        nagyit(aktsorszam)
        }
    else
        alert("Rossz válasz!")
        
    document.getElementById ("pontHelye").innerHTML=`Pontok: <b> ${helyes}/${osszes} ${Math.round(100*helyes/osszes,0)   }% </b>`
    //alert(aktsorszam)

}