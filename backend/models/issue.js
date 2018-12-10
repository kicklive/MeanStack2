import mongoose from 'mongoose';
mongoose.set('debug', true);
const Schema = mongoose.Schema;

let Issues = new Schema({
    title: { type: String },
    responsibility: { type: String },
    description: { type: String },
    severity: { type: String },
    status: { type: String, default: 'Open' }
});
export default mongoose.model('Issues', Issues);