module.exports= function(sequelize, dataTypes){
    let alias = "Movie";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        title:{
            type: dataTypes.STRING,
            
        },
       rating:{
            type: dataTypes.DOUBLE,
            
        }, 
        awards:{
            type: dataTypes.INTEGER,
            
        }, 
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        length:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        genre_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config={
        timestamps:true,
        tableName: "movies",
        underscored:true
    }
const Movie = sequelize.define(alias,cols,config);
Movie.associate = function(models){
    Movie.belongsTo(models.Genre, {
        as: "genre",
        foreignKey: "genre_id",
        underscored: true
    })
    Movie.belongsToMany(models.Actor, {
            as: "actors",
            through:"actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }

return Movie
}