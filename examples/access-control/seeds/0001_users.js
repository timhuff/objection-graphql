const {Model} = require('objection');
const {User, Project, User_Project} = require('../src/models');

exports.seed = async (knex) => {
    Model.knex(knex);
    await User.query().delete();
    await Project.query().delete();
    await User.query().insertGraph([
        {id: 1, username: 'Alice', password: 'alice'},
        {id: 2, username: 'Bob', password: 'bob'},
        {id: 3, username: 'John', password: 'john'},
    ]);
    await Project.query().insertGraph([
        {id: 1, title: 'Project 1'},
        {id: 2, title: 'Project 2'},
        {id: 3, title: 'Project 3'},
        {id: 4, title: 'Project 4'},
        {id: 5, title: 'Project 5'},
    ]);
    await User_Project.query().insertGraph([
        {user_id: 1, project_id: 1},
        {user_id: 1, project_id: 2},
        {user_id: 2, project_id: 2},
        {user_id: 3, project_id: 3},
        {user_id: 4, project_id: 4},
        ]);
};
