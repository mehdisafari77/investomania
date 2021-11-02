const Backing = require('./Backing')
const Project = require('./Project')
const User = require('./User')

// user can create many projects
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// user can back up many projects
User.hasMany(Backing, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Backing.belongsTo(User, {
    foreignKey: 'user_id'
});

// a project can have mnay backing
Project.hasMany(Backing, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
});

Backing.belongsTo(Project, {
    foreignKey: 'project_id'
});


module.exports = { Project, User, Backing };