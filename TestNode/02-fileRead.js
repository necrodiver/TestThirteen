var fs=require('fs')

function readFileData(filename){
    var data= fs.readFileSync(filename)
    if(data){
        return data
    }
    return null
}
module.exports=readFileData