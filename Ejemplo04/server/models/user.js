const mongoose = require("mongoose"),
      validator = require("validator"),
      jwt = require("jsonwebtoken"),
      _ = require("lodash"),
      bcrypt = require("bcryptjs");

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    let user = this,
        userObject = user.toObject();
    
    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
    let user = this,
        access = 'auth',
        token = jwt.sign({
            _id: user._id.toHexString(),
            access
        }, process.env.JWT_SECRET).toString();

    user.tokens = user.tokens.concat([{  
        access, token
    }]);

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function(token) {
    let User = this,
        decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch(e) {
        // return new Promis((resolve, reject) => {
        //     reject();
        // });
        return Promise.reject();
    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function(email, password) {
    let User = this;

    return User.findOne({email}).then((user) => {
        if(!user) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if(result) {
                    resolve(user);
                } else {
                    reject(user);
                }
            });
        });
    });
};

UserSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(!err) {                
                    user.password = hash;
                    next();
                }
            });
        });

    } else {
        next();
    }
});

UserSchema.methods.removeToken = function(token) {
    let user = this;

    return user.update({
        $pull: {
            tokens: {token}
        }
    });
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};