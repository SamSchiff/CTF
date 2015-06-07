/*
Please Read before using this version of the website.
When you input information at the beginning, the times must be integers between 1 and 23 (military time).
This will change in a future version but for now that's how I have it set.

Skip the two boxes labeled "Day when you want to start mm/dd/yy" and "Day when you want to end mm/dd/yy" and only use the final box instead.
Those are for future versions as well once I get real colleges saved.
Don't put more than 5 (maybe 6) days or the algorithm will be really slow.


Once in a while, if 9 schools are selected, the api will have too many calls per second and will not work.  I would recommend not using more than 8 schools.

See paper for other details







*/









var globalTime;
//var b = 1;
var numSchools= 0;
var schoolsDone = 0;
var schools = [];
var allSchools = [];
var done = 0;
var actualDays = -1;

var startTime = 7;
var endTime = 22;

var days = actualDays-1;
var filler = [];
var routes = [];
var maxSchools = 9;
var myHome;
var s = [];//2d
var e = [];//2d
var sorted= [];
var theIndex; 
for (var i = 0; i<10; i++) {
    s.push([]);
    e.push([]);
    for (var j = 0; j<4; j++) {
      s[i][j] =(10.5 + j*2);
      e[i][j] =(10.5 + j*2+2);
    }
  }

allSchools[0]=  new school(s,e, "school10", "new haven", "connecticut", 0);
allSchools[1]  = new school(s,e, "school1", "concord", "new hampshire", 1);
allSchools[2]  = new school(s,e, "school2", "albany", "new york", 2);
allSchools[3]  = new school(s,e, "school3", "baltimore", "maryland", 3);
allSchools[4]  = new school(s,e, "school4", "harrisburg", "pennsylvania", 4);
allSchools[5]  = new school(s,e, "school5", "raleigh", "north carolina", 5);
allSchools[6] = new school(s,e, "school6", "augusta", "maine", 6);
allSchools[7]  = new school(s,e, "school7", "pittsburgh", "pennsylvania", 7);
allSchools[8] = new school(s,e, "school8", "charleston", "south carolina", 8);
allSchools[9]  = new school(s,e, "school9", "boston", "massachusetts", 9);


//var selectedOptions = [];
//var checker = true;
/*while(checker){





for(var i = 1; i<=maxSchools; i++){
selectedOptions[i-1] = document.getElementById("s" + i.toString()).options.item(document.getElementById("s" + i.toString()).selectedIndex).id;

  
}

for(var j = 0; j<selectedOptions.length; j++){
    for(var k = 1; k<maxSchools; k++){
      for(var l = 0; l<document.getElementById("s" + k.toString()).options.length; l++){
    if(j+1 !=k){
    if(document.getElementById("s" + k.toString()).options.item(l).id != "not selected"){
    if(selectedOptions[j] === document.getElementById("s" + k.toString()).options.item(l).id){
          document.getElementById("s" + k.toString()).options.remove(l);
    }
}

  }
}
  }
  }




}
*/

//cookie functions taken from webiste referenced in sources
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}


function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}





function test(){









//console.log(endTime);
//console.log(readCookie(myCookie));


//createCookie("myCookie", endTime, 7);

}

function myfunction(){
//loadjson();




endTime = localStorage.getItem("theEndTime");
startTime=localStorage.getItem("theStartTime");
actualDays = localStorage.getItem("actDays");
numSchools = parseInt(localStorage.getItem("numberOfSchools"));

//console.log(JSON.parse(localStorage.getItem("startschool1")));
for(var i = 0; i<numSchools+1; i++){
console.log(numSchools+1);
schools[i] = new school (JSON.parse(localStorage.getItem("startschool"+i)),JSON.parse(localStorage.getItem("endschool"+i)), localStorage.getItem("nameschool"+i), localStorage.getItem("citySchool"+i), localStorage.getItem("stateSchool"+i), i);
schools[i].times = JSON.parse(localStorage.getItem("timesschool"+i));
console.log(schools[i].times);
}



days = actualDays-1;


//for(var i = 0; i<numSchools+1; i++){
  //for(var j = 0; j<schools[i].times.length; j++){

//console.log(schools[i].times[j]);

// }




//}







//var startTimes = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]];






var theSchools = [];


calculateDistance(schools, schools[numSchools], startTime, 0, endTime, 0, days, theSchools, 1, startTime);
  
for(var i = 0; i<routes.length; i++){
  for(var j = 0; j<routes[i].trip.length; j++){
    //if(routes[i].trip.length>= numSchools-1){
    //console.log(routes[i].trip[j].schoolName);
  //}
    //console.log(routes[i].trip[0] + "    "); 

  }
//console.log('\n');

}

console.log("done");




calculateTime(routes, schools[numSchools]);


}



function school(start, end, schoolName, city, state, number){
this.times = [];
this.starts =start;
this.ends = end;
this.schoolName = schoolName;
this.city = city;
this.number = number;
this.state = state;


   



    

}



function route(list){
var totalDistance = 0;
this.trip = list;

}








 function getStart(){
    return start;
  }
  function getEnd() {
    return end;
  }
   function getCity() {
    return city;
  }
  function getState() {
    return state;
  }

  function getName() {
    return schoolName;
  }
  
  function getNum() {
    return number;
  }
 




   
 school.prototype.getDistance = function(a) {
    //println(sqrt(sq(a.getX()-this.getX())+sq(a.getY()-this.getY())));
    // return sqrt(sq(a.getX()-this.getX())+sq(a.getY()-this.getY()));
   //console.log(this.times[a.number]);
    
    //console.log(this.times[a.number]);
    return  this.times[a.number];

    
    
  }
  





function loadjson()
{
   

localStorage.setItem("theEndTime", document.getElementById("endTime").value);
localStorage.setItem("theStartTime", document.getElementById("startTime").value);
localStorage.setItem("actDays", document.getElementById("actualDays").value);



//console.log(localStorage.getItem("theEndTime"));



 




 //console.log(numSchools);
 for(var i = 1; i<=maxSchools; i++){
 
var nameOfSchool = document.getElementById("s" + i.toString()).options.item(document.getElementById("s" + i.toString()).selectedIndex).id;

 if(nameOfSchool != "not selected"){
//console.log(allSchools[])
  for(var j = 0; j<allSchools.length; j++){
   
       //console.log(allSchools[j].schoolName);
       
      if(allSchools[j].schoolName === nameOfSchool){
       // console.log(allSchools[j].schoolName);

        schools[numSchools] = allSchools[j];
        allSchools[j].number = numSchools;

        numSchools++;
        
          break;
        }
         }
       }


}

myHome = new school(s,e,"home", document.getElementById("city").value,  document.getElementById("state").value,  numSchools);
localStorage.setItem("theHomeName", "home");
localStorage.setItem("theHomeCity", document.getElementById("city").value);
localStorage.setItem("theHomeState", document.getElementById("state").value);
localStorage.setItem("theHomeNumber", numSchools);
schools[numSchools] = myHome;
 // console.log(b);
calculateDistances(schools[0], 0);
//globalTime = 6;
//var e = JSON.stringify(test);
//console.log(globalTime);



}


function callback(response, status) {
  if (status == google.maps.DistanceMatrixStatus.OK) {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
  //console.log("it really works?");
  //console.log(duration);
  //globalTime = duration;
  //b= 10;
  //console.log(globalTime);
var newDuration;
duration2 = duration.split(" ");
//console.log(duration2);
var mins = parseInt(duration2[2],10);
var hours = parseInt(duration2[0],10);

console.log(schoolsDone);
if(duration2.length === 2){

  newDuration = hours/60;
}
else if(duration2.length === 4){
 
  newDuration = mins/60 + hours;
}
//console.log(duration2[2]/60);
//console.log(newDuration);
 
  schools[schoolsDone].times[done] = newDuration;
  
  if(schoolsDone < numSchools+1){
    if(done+1<numSchools+1){
      done+=1;
      calculateDistances(schools[schoolsDone], done);
       }
    
    else if(done+1 === numSchools+1){
    schoolsDone++;
    done = 0;
    if(schoolsDone === numSchools+1){
      for(var i = 0; i<numSchools+1; i++){
      localStorage.setItem("citySchool"+i, schools[i].city);
      localStorage.setItem("stateSchool"+i, schools[i].state);
      localStorage.setItem("startschool"+i, JSON.stringify(schools[i].starts));
      localStorage.setItem("endschool"+i, JSON.stringify(schools[i].ends));
      localStorage.setItem("timesschool"+i, JSON.stringify(schools[i].times));
       localStorage.setItem("nameschool"+i, schools[i].schoolName);

    }
      localStorage.setItem("numberOfSchools", numSchools);
      window.location = "CollegeWebsiteTrips.html";
    }
    else{
    calculateDistances(schools[schoolsDone], done);
  }
  }
}

}



function calculateDistances(theSchool, number) {
  //console.log(number);

var thisSchool1 = theSchool;
var thisSchool2 = schools[number];


  var origin1 = theSchool.city + ", " + thisSchool1.state;
  var destinationA = thisSchool2.city+ ", " +thisSchool2.state;


  var service = new google.maps.DistanceMatrixService();
  return service.getDistanceMatrix(
    {
      origins: [origin1],
      destinations: [destinationA],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, callback);


}

















function calculateDistance(a, beginning, startTime, extra, endTime, day, endDay, schoolsVisited, halfDay, startOfDay){

if (day <= endDay) {

//console.log(1);
    if (halfDay === 1) {
      if (day === endDay) {
        //console.log(3);
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[numSchools]) < endTime-(startTime -extra)) {
            //if(schoolsVisited.size()>3){
            
            routes[routes.length] = new route(schoolsVisited);
            // }
          }
        }// end if statement no schools visited today
        for (var i = 0; i<a.length-1; i++) {
          var t = a[i];
          if (checkSchools(schoolsVisited, t)) {
            for (var k = 0; k<t.starts[day].length; k++) {

              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 

                var theList = [];

                theList = updateSchools(schoolsVisited, t);
                calculateDistance(a, t, t.ends[day][k], 0, endTime, day, endDay, theList, 2, startOfDay);
                break;
              }
              //else if (t.getDistance(beginning) + (startTime -extra) > t.getStart()[day][k]) { 
              // if (t.getDistance(beginning)+(startTime-extra)< t.getStart()[day][k]) {
              // if (t.getDistance(home) < endTime - t.getEnd()[day][k]) {
              // ArrayList<school> theList = new ArrayList<school>();
              //theList = updateSchools(schoolsVisited, t);
              //routes.add(new route(theList));
              //}
              //}
              // }
            }//end for loop for all tours (this is a test)
          }// end check schools
        }// end big for loop
      }// end end day

      else if ( day!= endDay) {
        //console.log(2);
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[numSchools]) < endTime-(startTime -extra)) {
            // if(schoolsVisited.size()>5){
            routes[routes.length] = new route(schoolsVisited);
            // }
          }
          //else if ( beginning.getDistance(home) > endTime-(startTime -extra)) {

          //}
        }// end if statement no schools visited today
       
        calculateDistance(a, beginning, startOfDay, endTime-startTime, endTime, day+1, endDay, schoolsVisited, 1, startOfDay);
        //console.log(schoolsVisited);
        for (var i = 0; i<a.length-1; i++) {
          
          var t = a[i];

          
          if (checkSchools(schoolsVisited, t)) {
            //console.log(t);
            for (var k = 0; k<t.starts[day].length; k++) {
              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                var theList = [];
                theList = updateSchools(schoolsVisited, t);
                calculateDistance(a, t, t.ends[day][k], 0, endTime, day, endDay, theList, 2, startOfDay);
                // end check for first tour

                // else if (t.getDistance(beginning) + (startTime -extra) > t.gett1s()) { 
                // if (t.getDistance(beginning)+(startTime-extra)< t.gett2s()) {
                //ArrayList<school> theList = new ArrayList<school>();
                //theList = updateSchools(schoolsVisited, t);
                // calculateDistance(a, totalDistance, t, startTime, endTime- t.getEnd()[day][k], endTime, day+1, endDay, theList, home, 1, startOfDay);
                break;
              }
              // if (t.getDistance(home) < endTime - t.gett2e()) {
            }
            //  routes.add(new route(theList));
            //}// end check for route home second tour
            //}// end check for second tour
            //swap all the tt1s to 2d arrays
            //make this not an if statement and put it after the for loop for when no times can be made
            //calculateDistance(a, totalDistance, beginning, startTime, endTime- startTime, endTime, day+1, endDay, schoolsVisited, home, 1, startOfDay);

            //}
          }// end check schools
        }// for loop
      }// end day not endDay

    }//end half day 1



















    if (halfDay ===  2) {
      //console.log(4);
      if (day === endDay) {
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[numSchools]) < endTime-(startTime -extra)) {
            //  if(schoolsVisited.size()>5){
            routes[routes.length]= new route(schoolsVisited);
            //}
          }
        }// end if statement no schools visited today


        for (var i = 0; i<a.length-1; i++) {
          var t = a[i];
          for (var k = 0; k<t.starts[day].length; k++) {
            if (checkSchools(schoolsVisited, t)) {
              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                if (t.getDistance(a[numSchools])<= endTime-t.ends[day][k]) {
                  var theList = [];
                  theList = updateSchools(schoolsVisited, t);

                  // if(schoolsVisited.size()>5){
                  routes[routes.length]= new route(theList);
                  // }
                    break;
                  //calculateDistance(a, totalDistance, t, startOfDay, endTime-t.gett2e(), endTime, day+1, endDay, theList, home, 1, startOfDay);
                }
              }
            }
          }
        } // end for loop
      }// end end day







      else if (day != endDay) {
        //console.log(5);
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[numSchools]) < endTime-(startTime -extra)) {
            // if(schoolsVisited.size()>5){
            routes[routes.length] = new route(schoolsVisited);
            //}
          }
         // else if ( beginning.getDistance(home) > endTime-(startTime -extra) ) {
            
         // }
        }
          calculateDistance(a, beginning, startOfDay, endTime-startTime, endTime, day+1, endDay, schoolsVisited, 1, startOfDay);
        for (var i = 0; i<a.length-1; i++) {
          var t = a[i];
          for (var k = 0; k<t.starts[day].length; k++) {
            if (checkSchools(schoolsVisited, t)) {
              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                var theList = [];
                theList = updateSchools(schoolsVisited, t);
                calculateDistance(a, t, startOfDay, endTime-t.ends[day][k], endTime, day+1, endDay, theList, 1, startOfDay);
                break;
              }// end check for first tour


              // (t.getDistance(beginning) + (startTime -extra) > t.getStart()[day][k])
            }// end check schools
            
          }
         // calculateDistance(a, totalDistance, beginning, startOfDay, endTime- startTime, endTime, day+1, endDay, schoolsVisited, home, 1, startOfDay);
        }// end for loop
      }//end day not endDay
    }// end half day 2
  }// end day check
}//end calc distance 2










function updateSchools(c, g) {
var newArray = [];
var p = c.length;
for(var i = 0; i<p; i++){
newArray[i]= c[i];

}

newArray[p] = g;


  return newArray;

}



function checkSchools(f,b) {

for (var i = 0; i<f.length; i++) {
    if (f[i]===b){ 
      return false;
    }
  }
  return true;
}

















function calculateTime(theRoutes, home){
var maximum = 0;

var unSorted = [];


for(var i = 0; i<theRoutes.length; i++){
  if(theRoutes[i].trip.length > maximum){
maximum = theRoutes[i].trip.length;

  }
}
  

for(var i = 0; i<theRoutes.length; i++){

if(theRoutes[i].trip.length === maximum){
theRoutes[i].totalDistance = calcTotalDistance(theRoutes[i].trip, home);
//console.log(theRoutes[i].totalDistance);
unSorted.push(theRoutes[i]);

}


}



sorted = mergeSort(unSorted);


for(var i = 0; i<sorted.length; i++){
console.log(sorted[i].totalDistance);
}

var massiveString = "";
for(var i = 0; i<sorted.length; i++){
  /*var a =document.createElement("p");
  var b = document.createTextNode("CLICK ME");
  a.setAttribute("href", "moreInformation.html");
  a.appendChild(b);
     document.body.appendChild(a); 
     */ 

  massiveString+= i+1 + ".) Hours Of Driving:  "+ Math.floor(sorted[i].totalDistance) + "<br>";
  for(var j = 0; j<sorted[i].trip.length; j++){
 massiveString += sorted[i].trip[j].schoolName + "<br>";
  }
  //localStorage.setItem("indexOfTrip"+ i, i);

  massiveString+= "<button id = " + i + "trip, onClick = 'linkToLastPage(" +i + ")'>" + "Click Here for more information about this trip" + "</button>";
  massiveString+= "<br>" + "<br>" + "<br>";
}
document.getElementById("trips").innerHTML = massiveString;



//'theIndex = i; linkToLastPage()'


}


function onlyOnce(){
//console.log(localStor)

}


function linkToLastPage(index){
//index = theIndex;
theIndex = index;

for(var i = 0; i<sorted[theIndex].trip.length; i++){
    
    

      localStorage.setItem("chosenTripCity" + i, sorted[theIndex].trip[i].city);
      localStorage.setItem("chosenTripState" +i, sorted[theIndex].trip[i].state);
      localStorage.setItem("chosenTripStarts"+i, JSON.stringify(sorted[theIndex].trip[i].starts));
      localStorage.setItem("chosenTripEnds"+i, JSON.stringify(sorted[theIndex].trip[i].ends));
      localStorage.setItem("chosenTripTimes"+i, JSON.stringify(sorted[theIndex].trip[i].times));
      localStorage.setItem("chosenTripName"+i, sorted[theIndex].trip[i].schoolName);
      localStorage.setItem("chosenTripNumber"+i, sorted[theIndex].trip[i].number);
  
}


window.location = "moreInformation.html";
}




function calcTotalDistance(c, home){
var total = 0;
for(var i = -1; i<c.length; i++){
if(i === -1){
  total+= home.getDistance(c[i+1]);

}

else if(i === c.length-1){

total+= c[i].getDistance(home);


}

 else{
  total += c[i].getDistance(c[i+1]);

}

}

return total;
}








//taken from http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}




//taken from http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il].totalDistance < right[ir].totalDistance){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}






function reassemble(){
var chosenTrip = [];
var k = 0;
while(localStorage.getItem("chosenTripCity"+k) !=null){
  chosenTrip[chosenTrip.length] = new school(s,e, localStorage.getItem("chosenTripName"+k), localStorage.getItem("chosenTripCity"+k), localStorage.getItem("chosenTripState"+k), localStorage.getItem("chosenTripNumber"+k));
   
    chosenTrip[chosenTrip.length-1].times = JSON.parse(localStorage.getItem("timesschool"+chosenTrip[chosenTrip.length-1].number));
     console.log(JSON.parse(localStorage.getItem("timesschool"+chosenTrip[chosenTrip.length-1].number)));
    //s and e can be changed for a local storage value once it's parsed back into json (future version)

k++;
//console.log(chosenTrip[chosenTrip.length-1].number);

}


var beginning = new school (s,e, localStorage.getItem("theHomeName"),localStorage.getItem("theHomeCity"), localStorage.getItem("theHomeState"), localStorage.getItem("theHomeNumber"));

beginning.times = JSON.parse(localStorage.getItem("timesschool"+ chosenTrip.length));

chosenTrip [chosenTrip.length] = beginning;
var startTime = localStorage.getItem("theStartTime");
var endTime = localStorage.getItem("theEndTime");
var endDay = localStorage.getItem("actDays") - 1;
var mySchools = [];
var myRoutes = [];
var halfDayTimes = [];

localStorage.setItem("numRoutes", 0);
getMoreInfo(chosenTrip, beginning, startTime, 0, endTime, 0, endDay, mySchools, 1, startTime, chosenTrip.length-2, 0, myRoutes, halfDayTimes);
outputInfo(chosenTrip.length-1);


}

function specialRoute(trip, halfDayTimes){
this.trip = trip;
this.halfDayTimes = halfDayTimes;


}


function outputInfo(totalSchools){
 var massiveString = "";
  massiveString+= "<p> Here is a more detailed outline of your trip: </p>";
  massiveString+= "<br>" + "<br>";
massiveString+= "<p> You begin at home in " +localStorage.getItem("theHomeCity")+", "+ localStorage.getItem("theHomeState") + ".</p>";

  for(var i = 0; i<1/*localStorage.getItem("numRoutes")*/; i++){
                massiveString+= "<br>";
                var halfDays = JSON.parse(localStorage.getItem("myRoutesHDT" + i));
                for(var j = 0; j<totalSchools; j++){
                    var city = localStorage.getItem("myRoutesSVCity" + i+ j);
                    var state = localStorage.getItem("myRoutesSVState" + i+ j);
                   var number = localStorage.getItem("myRoutesSVNumber" + i+ j);
                  var name =  localStorage.getItem("myRoutesSVName" + i+ j);
                    var shift = 0;
                    for(var k = 0; k<halfDays.length; k++){
                        if(k<=j+shift){
                          if(halfDays[k] == null){
                            shift++;
                        }
                      }
                        
                      

                        }//end k loop
                        var start = halfDays[j+shift][0];
                        var end = halfDays[j+shift][1];
                       var day = Math.floor((j+2+shift)/2);
                         massiveString+= "<p>Next you go to " + name + " in " + city +", " + state + " to the tour that starts at, "+ start  +" and ends at "+ end +" on day "+ day +" </p>";
                          shift = 0;
                    }//end j loop
                   

                }//end i loop
          
            


            

          

document.getElementById("trips").innerHTML = massiveString;
}

function getMoreInfo(a, beginning, startTime, extra, endTime, day, endDay, schoolsVisited, halfDay, startOfDay, totalSchools,  schoolWeAreOn, myRoutes, halfDayTimes){






//console.log(a[schoolWeAreOn]);



if (day <= endDay) {

//console.log(1);
    if (halfDay === 1) {

      if (day === endDay) {

        //console.log(3);
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[a.length-1]) < endTime-(startTime -extra) && schoolWeAreOn == totalSchools+1) {
            //if(schoolsVisited.size()>3){
            
            myRoutes[myRoutes.length] = new specialRoute(schoolsVisited, halfDayTimes);
            
              var interimRoutes =  parseInt(localStorage.getItem("numRoutes")) + 1;
            localStorage.setItem("numRoutes", interimRoutes);
              for(var i = 0; i<myRoutes.length; i++){
                for(var j = 0; j<myRoutes[i].trip.length; j++){
                    localStorage.setItem("myRoutesSVCity" + i + j, myRoutes[i].trip[j].city);
                    localStorage.setItem("myRoutesSVState" + i + j , myRoutes[i].trip[j].state);
                    localStorage.setItem("myRoutesSVNumber" + i + j , myRoutes[i].trip[j].number);
                    localStorage.setItem("myRoutesSVName" + i + j , myRoutes[i].trip[j].schoolName);

                    
                }
          
            localStorage.setItem("myRoutesHDT" + i, JSON.stringify(myRoutes[i].halfDayTimes));
          }

            // }
          }
        }// end if statement no schools visited today
        //for (var i = 0; i<a.length-1; i++) {
          if(schoolWeAreOn <= totalSchools){
          var t = a[schoolWeAreOn];
         // if (checkSchools(schoolsVisited, t)) {
            for (var k = 0; k<t.starts[day].length; k++) {

              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 

                var theList = [];
                halfDayTimes[day*2] = [];
                halfDayTimes[day*2][0] = t.starts[day][k];
                halfDayTimes[day*2][1] = t.ends[day][k];
                theList = updateSchools(schoolsVisited, t);
                getMoreInfo(a, t, t.ends[day][k], 0, endTime, day, endDay, theList, 2, startOfDay, totalSchools, schoolWeAreOn+1, myRoutes, halfDayTimes);
                break;
              }
              //else if (t.getDistance(beginning) + (startTime -extra) > t.getStart()[day][k]) { 
              // if (t.getDistance(beginning)+(startTime-extra)< t.getStart()[day][k]) {
              // if (t.getDistance(home) < endTime - t.getEnd()[day][k]) {
              // ArrayList<school> theList = new ArrayList<school>();
              //theList = updateSchools(schoolsVisited, t);
              //routes.add(new route(theList));
              //}
              //}
              // }
            }//end for loop for all tours (this is a test)
            }
          //}// end check schools
       // }// end big for loop
      }// end end day

      else if ( day!= endDay) {
        //console.log(2);
   
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[a.length-1]) < endTime-(startTime -extra) && schoolWeAreOn == totalSchools+1) {
            // if(schoolsVisited.size()>5){
            //routes[routes.length] = new route(schoolsVisited); //for this if: check if it's the last school already then add the trip
            // }
             myRoutes[myRoutes.length] = new specialRoute(schoolsVisited, halfDayTimes);
             var interimRoutes =  parseInt(localStorage.getItem("numRoutes")) + 1;
              localStorage.setItem("numRoutes", interimRoutes);
              for(var i = 0; i<myRoutes.length; i++){
                for(var j = 0; j<myRoutes[i].trip.length; j++){
                    localStorage.setItem("myRoutesSVCity" + i+ j, myRoutes[i].trip[j].city);
                    localStorage.setItem("myRoutesSVState" + i+ j, myRoutes[i].trip[j].state);
                    localStorage.setItem("myRoutesSVNumber" + i+ j, myRoutes[i].trip[j].number);
                    localStorage.setItem("myRoutesSVName" + i+ j, myRoutes[i].trip[j].schoolName);

                    
                }
          
            localStorage.setItem("myRoutesHDT" + i, JSON.stringify(myRoutes[i].halfDayTimes));
          }


          }
          //else if ( beginning.getDistance(home) > endTime-(startTime -extra)) {

          //}
        }// end if statement no schools visited today
       
         getMoreInfo(a, beginning, startOfDay, endTime-startTime, endTime, day+1, endDay, schoolsVisited, 1, startOfDay, totalSchools, schoolWeAreOn, myRoutes, halfDayTimes);

        //console.log(schoolsVisited);
       // for (var i = 0; i<a.length-1; i++) {
           if(schoolWeAreOn <= totalSchools){
          var t = a[schoolWeAreOn];

          
         // if (checkSchools(schoolsVisited, t)) {
            //console.log(t);
            for (var k = 0; k<t.starts[day].length; k++) {

              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                var theList = [];
                 halfDayTimes[day*2] = [];
                halfDayTimes[day*2][0] = t.starts[day][k];
                halfDayTimes[day*2][1] = t.ends[day][k];
                theList = updateSchools(schoolsVisited, t);
                getMoreInfo(a, t, t.ends[day][k], 0, endTime, day, endDay, theList, 2, startOfDay, totalSchools, schoolWeAreOn+1, myRoutes, halfDayTimes);
              
                // end check for first tour

                // else if (t.getDistance(beginning) + (startTime -extra) > t.gett1s()) { 
                // if (t.getDistance(beginning)+(startTime-extra)< t.gett2s()) {
                //ArrayList<school> theList = new ArrayList<school>();
                //theList = updateSchools(schoolsVisited, t);
                // calculateDistance(a, totalDistance, t, startTime, endTime- t.getEnd()[day][k], endTime, day+1, endDay, theList, home, 1, startOfDay);
                break;
              }
              // if (t.getDistance(home) < endTime - t.gett2e()) {
            }
          }
            //  routes.add(new route(theList));
            //}// end check for route home second tour
            //}// end check for second tour
            //swap all the tt1s to 2d arrays
            //make this not an if statement and put it after the for loop for when no times can be made
            //calculateDistance(a, totalDistance, beginning, startTime, endTime- startTime, endTime, day+1, endDay, schoolsVisited, home, 1, startOfDay);

            //}
          //}// end check schools
      //  }// for loop
      }// end day not endDay

    }//end half day 1



















    if (halfDay ===  2) {
      //console.log(4);
      if (day === endDay) {
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[a.length-1]) < endTime-(startTime -extra) && schoolWeAreOn == totalSchools+1) {
            //  if(schoolsVisited.size()>5){
              myRoutes[myRoutes.length] = new specialRoute(schoolsVisited, halfDayTimes);
              console.log(schoolsVisited);
              var interimRoutes =  parseInt(localStorage.getItem("numRoutes")) + 1;
              localStorage.setItem("numRoutes", interimRoutes);
              for(var i = 0; i<myRoutes.length; i++){
                for(var j = 0; j<myRoutes[i].trip.length; j++){
                    localStorage.setItem("myRoutesSVCity" + i+ j, myRoutes[i].trip[j].city);
                    localStorage.setItem("myRoutesSVState" + i+ j, myRoutes[i].trip[j].state);
                    localStorage.setItem("myRoutesSVNumber" + i+ j, myRoutes[i].trip[j].number);
                    localStorage.setItem("myRoutesSVName" + i+ j, myRoutes[i].trip[j].schoolName);

                    
                }
          
            localStorage.setItem("myRoutesHDT" + i, JSON.stringify(myRoutes[i].halfDayTimes));
          }


 
            //}
          }
        }// end if statement no schools visited today


       // for (var i = 0; i<a.length-1; i++) {
          if(schoolWeAreOn <= totalSchools){
          var t = a[schoolWeAreOn];
          for (var k = 0; k<t.starts[day].length; k++) {
            //if (checkSchools(schoolsVisited, t)) {
              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                if (t.getDistance(a[a.length-1])<= endTime-t.ends[day][k]) {
                  var theList = [];
                    halfDayTimes[day*2+1] = [];
                halfDayTimes[day*2+1][0] = t.starts[day][k];
                halfDayTimes[day*2+1][1] = t.ends[day][k];
                  theList = updateSchools(schoolsVisited, t);

                  // if(schoolsVisited.size()>5){
                  if(schoolWeAreOn == totalSchools){
                  myRoutes[myRoutes.length] = new specialRoute(theList, halfDayTimes);
                 var interimRoutes =  parseInt(localStorage.getItem("numRoutes")) + 1;
              localStorage.setItem("numRoutes", interimRoutes);
                  for(var i = 0; i<myRoutes.length; i++){
                for(var j = 0; j<myRoutes[i].trip.length; j++){
                    localStorage.setItem("myRoutesSVCity" + i+ j, myRoutes[i].trip[j].city);
                    localStorage.setItem("myRoutesSVState" + i+ j, myRoutes[i].trip[j].state);
                    localStorage.setItem("myRoutesSVNumber" + i+ j, myRoutes[i].trip[j].number);
                    localStorage.setItem("myRoutesSVName" + i+ j, myRoutes[i].trip[j].schoolName);

                    
                }
          
            localStorage.setItem("myRoutesHDT" + i, JSON.stringify(myRoutes[i].halfDayTimes));
          }



                }
                  // }
                    break;
                  //calculateDistance(a, totalDistance, t, startOfDay, endTime-t.gett2e(), endTime, day+1, endDay, theList, home, 1, startOfDay);
                }
              }
           // }
          }
          }
        //} // end for loop
      }// end end day







      else if (day != endDay) {
        //console.log(5);
        if (schoolsVisited.length > 0) {
          if (beginning.getDistance(a[a.length-1]) < endTime-(startTime -extra) && schoolWeAreOn == totalSchools+1) {
            // if(schoolsVisited.size()>5){
           var interimRoutes =  parseInt(localStorage.getItem("numRoutes")) + 1;
              localStorage.setItem("numRoutes", interimRoutes);
            myRoutes[myRoutes.length] = new specialRoute(schoolsVisited, halfDayTimes);

            for(var i = 0; i<myRoutes.length; i++){
                for(var j = 0; j<myRoutes[i].trip.length; j++){
                    localStorage.setItem("myRoutesSVCity" + i+ j, myRoutes[i].trip[j].city);
                    localStorage.setItem("myRoutesSVState" + i+ j, myRoutes[i].trip[j].state);
                    localStorage.setItem("myRoutesSVNumber" + i+ j, myRoutes[i].trip[j].number);
                    localStorage.setItem("myRoutesSVName" + i+ j, myRoutes[i].trip[j].schoolName);

                    
                }
          
            localStorage.setItem("myRoutesHDT" + i, JSON.stringify(myRoutes[i].halfDayTimes));
          }


            //}
          }
         // else if ( beginning.getDistance(home) > endTime-(startTime -extra) ) {
            
         // }
        }
          getMoreInfo(a, beginning, startOfDay, endTime-startTime, endTime, day+1, endDay, schoolsVisited, 1, startOfDay, totalSchools, schoolWeAreOn,  myRoutes, halfDayTimes);
       // for (var i = 0; i<a.length-1; i++) {
          if(schoolWeAreOn <= totalSchools){
          var t = a[schoolWeAreOn];
          for (var k = 0; k<t.starts[day].length; k++) {
           // if (checkSchools(schoolsVisited, t)) {
              if (t.getDistance(beginning) + (startTime -extra) < t.starts[day][k]) { 
                var theList = [];
                halfDayTimes[day*2+1] = [];
                halfDayTimes[day*2+1][0] = t.starts[day][k];
                halfDayTimes[day*2+1][1] = t.ends[day][k];
                theList = updateSchools(schoolsVisited, t);
                getMoreInfo(a, t, startOfDay, endTime-t.ends[day][k], endTime, day+1, endDay, theList, 1, startOfDay, totalSchools, schoolWeAreOn+1,  myRoutes, halfDayTimes);
                break;
              }// end check for first tour


              // (t.getDistance(beginning) + (startTime -extra) > t.getStart()[day][k])
           // }// end check schools
            
          }
        }
         // calculateDistance(a, totalDistance, beginning, startOfDay, endTime- startTime, endTime, day+1, endDay, schoolsVisited, home, 1, startOfDay);
       // }// end for loop
      }//end day not endDay
    }// end half day 2
  }// end day check


}//end calc distance 2
