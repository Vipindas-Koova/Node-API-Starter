module.exports = function(app){
    var projects = require("../controllers/projectsController.js");

    app.route('/projects')
        .get(projects.listProjects);

    app.route('/projects/:projectId')
        .get(projects.getProject);
        
}