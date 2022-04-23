module.exports= function(sequelize, dataTypes){
    let alias = "User";
    let cols ={
        id:{
            type: dataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey:true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
            
        },
       email:{
            type: dataTypes.STRING,
            allowNull: false
            
        }, 
        password:{
            type: dataTypes.STRING,
            allowNull: false
        }, 
        remember_token:{
            type: dataTypes.STRING,
            allowNull: false
        },
        rol:{
            type: dataTypes.BOOLEAN,
        }
    };
    let config={
        timestamps:true,
        tableName: "users",
        underscored:true
    }
const User = sequelize.define(alias,cols,config);
return User
}