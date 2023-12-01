const User = require('../schemas/model.js');

const isEmailValid = (email)=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const checkEmailexist = async (email) => {
        const exist = await User.find({ email });
        if (exist.length > 0) {
            return true;
        }
        return false;

};

const TeamFull = async (team) => {
    const exist = await User.find({ team });
    if (exist.length >= 5) {
        return true;
    }
    return false;


}

const addParticipant = async(req,res) =>{
    try{
        const {name,email,team,phoneNumber,institution,placeToStay,anythingToAdd} = req.body;
        if(!name || !email || !team || !phoneNumber || !institution || !placeToStay || !anythingToAdd){
            return res.status(400).json({msg : "Please enter all fields"});
        }
        if(!isEmailValid(email)){
            return res.status(400).json({msg : "Please enter a valid email"});
        }
        if(await checkEmailexist(email)){
            return res.status(400).json({msg : "This email is already registered"});
        }
        if(await TeamFull(team)){
            return res.status(400).json({msg : "This team is full"});
        }
        const info = {
            name,   
            email,
            team,
            phoneNumber,
            institution,
            placeToStay,
            anythingToAdd
        
        }
        const user = await User.create(info)
        if(user) {
            return res.status(200).json({msg : "Participant added successfully"});
        }
        return res.status(500).json({msg : "Something went wrong"});
    }catch(err){
        return res.status(500).json({msg : err.message});
    }
}

const getParticipants = async(req,res) =>{
    try{
        let users = User.find({}).sort('team')
        users = await users;
        if(users){
            return res.status(200).json({users});
        }
        return res.status(500).json({msg : "Something went wrong"});
    }catch(err){
        return res.status(500).json({msg : err.message});
    }
}
module.exports = {
    addParticipant,
    getParticipants
}