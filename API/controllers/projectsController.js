var project = require('../models/project.js');

exports.AddProject = function(req,res){

};

exports.listProjects = function(req,res){
    var p1 = project.create();
    var p2 = project.create();
    var p3 = project.create();

    p1.id('1');
    p2.id('2');
    p2.id('3');

    p1.name('p1');
    p2.name('p2');
    p3.name('p7');

    res.send([p1.toJSON(),p2.toJSON(),p3.toJSON()]);
};

exports.getProject = function(req,res){
    var id = req.params.projectId;
    res.send("hello"+id);
};

exports.updateProject = function(req,res){
    
}

//module.exports = app;
