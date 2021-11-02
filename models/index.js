const Backing = require('./Backing')
const Project = require('./Project')
const User = require('./User')

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Backing, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.hasMany(Backing, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
});

Backing.belongsTo(User, {
    foreignKey: 'user_id'
});

Backing.belongsTo(Project, {
    foreignKey: 'project_id'
});

module.exports = { Project, User, Backing };