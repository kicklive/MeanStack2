import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import Issue from './models/issue'
//import config from './backend/config/config'[env];

const app = express();
const router = express.Router();


app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/Issues');
const connection = mongoose.connection;

//attach event listner. once because this is a one time event. 
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

//attach more middlewar4e

//attach endpoints

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issues)
        }
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issue)
        }
    });
});
router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save().then(issue => {
        res.status(200).json({
            'issue': 'Added successfully'
        });
    }).catch(err => {
        res.status(400).send('Failed to create new record');
    });
});
router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.param.id, (err, issue) => {
        if (!issue) {
            return next(new Error('Could not load document'));
        } else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });

    router.route('issue/delete/:id').get((req, res) => {
        Issue.findByIdAndRemove({
            _id: req.param.id
        }, (err, issue) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Remove successfully');
            }
        })
    });


    let issue = new Issue(req.body);
    issue.save().then(issue => {
        res.status(200).json({
            'issue': 'Added successfully'
        });
    }).catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

app.use('/', router);

//app.get('/', (req, res) => res.send('Hello world'));
app.listen(4000, () => console.log('Express server running on port 4000'));