const db=require("../helper/db");
async function CreateUser(body){
    var answer_single = await db.cluster.query(`INSERT INTO LoginRegister(KEY, VALUE)
    VALUES ("user_id=$1", { "name=$1","email=$3,"password=$4" })`, { parameters: [1,body.name,body.email,body.password] })
    .catch((reason) => console.log(reason));
}
module.exports={CreateUser};