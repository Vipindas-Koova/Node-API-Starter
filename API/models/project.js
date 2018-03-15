var dumpyProjects = {
    "id":"1",
    "":"",
    "":""
};
var model = require("nodejs-model");

var project = model("Project").attr('id',{
    validations:{
        presence:{
            message:'Id is requried'
        }
    }
}
).attr('name').attr('description').attr('startdate');

module.exports = project;