var totalMW;
var genID;
var genSt;
var MW;
function changePowerTotal(totalMW,genID,genSt,MW) {
  if(genSt==="on") {
  	totalMW +=MW;
    alert("Generator #"+genID+" is now on, adding "+MW+" MW, for a total of "+totalMW+" MW!");
  }
  else if(genSt==="off") {
  	totalMW -= MW;
    alert("Generator #"+genID+" is now off, removing "+MW+" MW, for a total of "+totalMW+" MW!");
  }
  return totalMW;
}