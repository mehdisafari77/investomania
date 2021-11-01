const Backing = require('./Backing')
const Project = require('./Project')
const User = require('./User')

Project.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Project.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Backing.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {
    Project,
    User,
    Backing
}