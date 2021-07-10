    const timer = document.querySelector('.stopwatch');
    var hr=0;
    var min=0;
    var sec=0;
    var centis=0;
    var stoptime=true;
    const rec = [];
    function startTimer(){
        if (stoptime == true){
            stoptime = false;
            counter();
        }
    }
    function stopTimer(){
        if(stoptime == false){
            stoptime = true;
        }
    }
    function counter(){
        if(stoptime == false){
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);
            centis=parseInt(centis);
            sec++
            if (sec==60){
                min++;
                sec=0;
            }
            if (min==60){
                hr++;
                min=0;
                sec=0;
            }
            if (centis<10 || centis==0){
                centis='0'+centis
            }
            if (sec<10 || sec==0){
                sec = '0'+sec;
            }
            if (min<10||min==0){
                min='0'+min;
            }
            if(hr<10||hr==0){
                hr='0'+hr
            }
            timer.write=hr + ':' + min + ':' + sec ;
            setTimeout("counter()", 1000);
        }
    }
    function resetTimer(){
        timer.innerHTML = "00:00:00";
        stoptime=true;
        hr=0;
        min=0;
        sec=0;
    }
    function lap(){
        rec.push(hr+":"+min+":"+sec);
        document.querySelector('.records').write = rec.join('<br>');
    }
    function clearList(){
        document.querySelector('.records').write = "no records found";
        while (rec.length>0){
            rec.pop();
        }
    }