const Backing = require('./Backing')
const Project = require('./Project')
const User = require('./User')

User.hasMany(Project, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE'
})
User.hasMany(Backing, {
    foreignKey:'backing_id',
    onDelete: 'CASCADE'
})

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Project.hasMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
Project.hasMany(Backing, {
    foreignKey:'backing_id',
    onDelete: 'CASCADE'
})

Backing.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Backing.belongsTo(Project, {
    foreignKey:'project_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Project,
    User,
    Backing
}