module.exports= function(sequelize, dataTypes){
    let alias = "Actor";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        first_name:{
            type: dataTypes.STRING,
            
        },
       last_name:{
            type: dataTypes.STRING,
            
        }, 
    };
    let config={
        timestamps:false,
        tableName: "actors",
        underscored:true
    }
const Actor =sequelize.define(alias,cols,config);
Actor.associate = function(models){
    Actor.belongsToMany(models.Movie, {
        as: "movies",
        through: "actor_movie",
        foreignKey: "actor_id",
        otherKey: "movie_id"
    })
}
return Actor
}