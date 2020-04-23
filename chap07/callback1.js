let obj = {
    count: 0,
    startTimer: function() {
      console.log(this.count);    //this = obj
      let callback = function() { console.log(this.count++); };   //this = setInterval
      setInterval(callback, 1000);
    }
  }
  
  obj.startTimer();
  
  