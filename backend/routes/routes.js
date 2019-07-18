var data = [
    {
        "title": "Fix Google Marketing Pixel",
        "dueDate": "06/07/19",
        "completed": false,
        "notes": "Awaiting stakeholder feedback",
        "priority": 1
    },
    {
        "title": "Deploy Microsite",
        "dueDate": "20/08/20",
        "completed": false,
        "notes": "",
        "priority": 3
    },
    {
        "title": "Loyalty Search",
        "dueDate": "02/04/19",
        "completed": true,
        "notes": "Deployed 01/04/19",
        "priority": 2
    },
    {
        "title": "Book 1-2-1",
        "dueDate": "03/02/19",
        "completed": true,
        "notes": "Room 12342 at 05/02",
        "priority": 4
    },
    {
        "title": "Remove Legacy Code From Loyalty Platform",
        "dueDate": "28/06/19",
        "completed": false,
        "notes": "Awaiting PM approval",
        "priority": 5
    }
]
var appRouter = function (app, db) {
    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });
    app.get("/tasks", function (req, res) {
        res.status(200).send(data);
    });
    app.post('/tasks', (req, res) => {
        var task = {task: req.body.task, title: req.body.dueDate};
        res.status(200).send(task);
    
         db.collection('tasks').insert(task, (err, res) => {
            err ? res.send('error') : res.send('added');
        })
    })
};

var helloTim = function(){
    console.log('tim');
}

module.exports = {appRouter, helloTim}; 

