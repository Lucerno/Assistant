function heure(){
    var date = new Date();
    var str = "Il est " + date.getHours();
    str += ' heure, '+(date.getMinutes()<10?'0':'')+date.getMinutes()+" minutes et ";
    str += (date.getSeconds()<10?'0':'')+date.getSeconds()+" secondes";
    return str;
}


phrases = phrases + ";quel heure est t-il,heure()";