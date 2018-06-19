const BaseModel = require('./BaseModel');

module.exports = class User_Project extends BaseModel {
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        user_id: { type: 'integer' },
        project_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: this.BelongsToOneRelation,
        modelClass: 'User',
        join: {
          from: 'User_Project.user_id',
          to: 'User.id',
        },
      },
      projects: {
        relation: this.BelongsToOneRelation,
        modelClass: 'Project',
        join: {
          from: 'User_Project.project_id',
          to: 'Project.id',
        },
      },
    };
  }
};
