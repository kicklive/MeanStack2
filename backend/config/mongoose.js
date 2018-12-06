import mongoose from 'mongoose';


module.exports = (config) => {
    mongoose.connect(config.db);
    const db = mongoose.connection;



    //attach event listner. once because this is a one time event. 
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', () => {
        console.log('MongoDB database connection established successfully');
    });




    import issues from 'models/issue';


}