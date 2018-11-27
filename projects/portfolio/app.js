var userName = '';
// userData as attached json
// userData by day as attached json
var today = "datetime for viewer's day";
var schedule = {};
// schedule constructor
// random schedule constructor
var tasks = [];
// task constructor
var task = {
    'id': 'dynamic DB id',
    'name': 'Task Name',
    'deadline': 'datetime',
    'priority': 1,
    'effort': 3,
    'lock': false,
    'description': 'Description',
    'tags': ['TagA', 'TagB'],
    'attachment': 'URL',
    'segmenting': true,
    'segmentSize': 'minimumUsableSegment'
};
var priorities = [];
var tags = [];
// dynamically includes all existing, plus
// new tag constructor


var isLocked = function isLocked() {
    // day.schedule.task.lock = true;
};

var shuffleSchedule = function shuffleSchedule(type) {
    // type = estTimeAsc, estTimeDesc, effortAsc, effortDesc, priorityAsc, priorityDesc, fullRandom, maxUsage, deadline, tagFilter, meterFiller(1)
    // for day.schedule.task.lock != true;
    // random number based on number of tasks
    // time remaining

    // (1) Prioritize to finish weekly time goals as efficiently as possible
};

var generateSchedule = function generateSchedule(schedule) {
    // start task at time
    // extend task to time
    // end task
    // move to next task by time
};

var newDay = function newDay() {
    // create new div to right of old div
    // slide in animation
    // slide out old div
};

var weeklyGoals = function weeklyGoals() {
    // count hours committed
    // display remaining goal hours
}

alert("Pardon the mess. I'm still working.");