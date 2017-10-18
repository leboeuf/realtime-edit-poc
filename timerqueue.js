// https://codereview.stackexchange.com/questions/148363
function TimerQueue(){
  this.currentTimer = null;
  this.tasks = [];
}

TimerQueue.prototype.addTask = function(callback, delay){
  this.tasks.push({ callback: callback, delay: delay });

  if(this.currentTimer) return;

  this.launchNextTask();
};

TimerQueue.prototype.launchNextTask = function(){
  if(this.currentTimer) return;

  var self = this;
  var nextTask = this.tasks.shift();

  if(!nextTask) return this.clear();

  this.currentTimer = setTimeout(function(){
    nextTask.callback.call();

    self.currentTimer = null;

    self.launchNextTask();
  }, nextTask.delay);
};

TimerQueue.prototype.clear = function(){
  if (this.currentTimer) clearTimeout(this.currentTimer);

  this.currentTimer = null;

  this.tasks.length = 0;
};