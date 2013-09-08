(function() {

  var seq = [
    1500, 300,
    1500, 300,
    1500, 300,
    1500, 900
  ];

  var debug = [
    5, 3,
    5, 3,
    5, 3
  ];

  var count = 0;

  var headerDiv = selOne('.header');
  var triggerBtn = selOne('#trigger');
  var timeDisplay = selOne('#time');
  var soundOption = selOne('#setting-sound');
  var repeatOption = selOne('#setting-repeat');

  var timer = new Timer({
    tick: 1
  });

  timer.on('tick', function() {
    // update text
    timeDisplay.innerHTML = format(timer.getDuration());
  });

  timer.on('start', function() {
    // change button's text
    triggerBtn.text = 'PAUSE';
    headerDiv.classList.remove('bg-mute');
    if (count % 2 == 0) {
      // work
      headerDiv.classList.add('bg-work');
      headerDiv.classList.remove('bg-rest');
    } else {
      // rest
      headerDiv.classList.add('bg-rest');
      headerDiv.classList.remove('bg-work');
    }
  });

  timer.on('end', function() {
    // start next
    triggerBtn.text = 'START';
    count++;
    var _repeat = repeatOption.options[repeatOption.selectedIndex].value;
    var _sound = soundOption.options[soundOption.selectedIndex].value;
    for (var _i = 0; _i < _repeat; _i++) {
      setTimeout(function() {   
        playAlert(_sound);
      }, 500 * _i);
    }
    if (count < seq.length) {
      timer.start(seq[count]);
    } else {
      count = 0;
    }
  });

  timer.on('pause', function() {
    // change button's text
    triggerBtn.text = 'RESUME';
    headerDiv.classList.remove('bg-work');
    headerDiv.classList.remove('bg-rest');
    headerDiv.classList.add('bg-mute');
    timer.pause();
  });

  triggerBtn.onclick = function(e) {
    e.preventDefault();
    if (timer.getStatus() !== 'started') {
      timer.start(seq[count]);
    } else {
      timer.pause();
    }
  }

  var format = function(time) {
    var text = '';
    var _minute = Math.floor(time / 60);
    if (_minute < 10) {
      text += '0';  
    }
    text += _minute;
    text += ':';
    var _second = time % 60;
    if (_second < 10) {
      text += '0';
    }
    text += _second;
    return text;
  }

}).call(this);
