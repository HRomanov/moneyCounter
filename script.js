(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        


  let birthday = "Dec 31, 2021 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    
       
        let now = new Date().getTime(),
           distance = countDown - now;
           dday = Math.floor(distance / (day)),
           dhour  = Math.floor((distance % (day)) / (hour)),
           dminute  =Math.floor((distance % (hour)) / (minute)),
           dsecond  =Math.floor((distance % (minute)) / second);

        
          point1 = 3000-((distance/second)*0.000091628);
          point2 = 7000-((distance/second)*0.0002138);

          start = Date.now();
          count = (Date.now() - start)/1000

          // document.getElementById("days").innerText =dday,
          // document.getElementById("hours").innerText = dhour,
          // document.getElementById("minutes").innerText = dminute,
          // document.getElementById("seconds").innerText = dsecond;
          document.getElementById("dollars").innerText = point1.toFixed(3);
          document.getElementById("dollars2").innerText = point2.toFixed(3);

          grn1=point1*28;
          grn2=point2*28;
          document.getElementById("grn1").innerText = grn1.toFixed(3);
          document.getElementById("grn2").innerText = grn2.toFixed(3);


      }, 0)
  }());