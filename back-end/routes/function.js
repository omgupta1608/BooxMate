module.exports.genId = function genId(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.getDate = function getDate(){
    var d = new Date();
    var month = d.getMonth() + 1;
    var mins = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
    var hours = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
    var date = hours + ':' + mins + ' ' + d.getDate() + '-' + month  + '-' + d.getFullYear();

    return date;
}