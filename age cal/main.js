
function monthnum() {
    var month = parseInt(document.getElementById("month").value);
    if (  month < 1 || month > 12) {
        month = 0;
        document.getElementById("month").value = '';
        document.getElementById("note-month").innerHTML = 'not valid';
    }

    else{
        document.getElementById("month").value = parseInt(month);
        document.getElementById("note-month").innerHTML = '';

    }






    
function daynum()
{
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    if(month==1 || month==3 || month==5 || month==7 
        || month==8 || month==10 || month==12){ 

    if ( day < 1 || day >31){
        day = 0;
        document.getElementById("day").value = '';
        document.getElementById("note-day").innerHTML = 'not valid';}
        else{
            document.getElementById("day").value = parseInt(day);
        document.getElementById("note-day").innerHTML = ' ';
        
        }

}
if(month==4 || month==6 || month==9 || month==10 || month==11 )
   { 

if ( day < 1 || day >30){
    day = 0;
    document.getElementById("day").value = '';
    document.getElementById("note-day").innerHTML = 'not valid';}
    else{
        document.getElementById("day").value = parseInt(day);
    document.getElementById("note-day").innerHTML = ' ';
    }

}
if(year%4==0 && month==2){
    
        if ( day < 1 || day >29){
            day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
            }
        
        
    }


    if(year%4!=0 && month==2){
    
        if ( day < 1 || day >28){
            day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
            }
        
        
    }

 if(day<0 || day>31){
    day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
 }
}


    }


function daynum()
{
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    if(month==1 || month==3 || month==5 || month==7 
        || month==8 || month==10 || month==12){ 

    if ( day < 1 || day >31){
        day = 0;
        document.getElementById("day").value = '';
        document.getElementById("note-day").innerHTML = 'not valid';}
        else{
            document.getElementById("day").value = parseInt(day);
        document.getElementById("note-day").innerHTML = ' ';
        
        }

}
if(month==4 || month==6 || month==9 || month==10 || month==11 )
   { 

if ( day < 1 || day >30){
    day = 0;
    document.getElementById("day").value = '';
    document.getElementById("note-day").innerHTML = 'not valid';}
    else{
        document.getElementById("day").value = parseInt(day);
    document.getElementById("note-day").innerHTML = ' ';
    }

}
if(year%4==0 && month==2){
    
        if ( day < 1 || day >29){
            day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
            }
        
        
    }


    if(year%4!=0 && month==2){
    
        if ( day < 1 || day >28){
            day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
            }
        
        
    }

 if(day<0 || day>31){
    day = 0;
            document.getElementById("day").value = '';
            document.getElementById("note-day").innerHTML = 'not valid';}
            else{
                document.getElementById("day").value = parseInt(day);
            document.getElementById("note-day").innerHTML = ' ';
 }
}

function yearnum(){
    var year = parseInt(document.getElementById("year").value);
 
    if(year<1 || year>2024){
        year = 0;
        document.getElementById("year").value ='';
        document.getElementById("note-year").innerHTML =' not valid';
    }
    else{
       
        document.getElementById("year").value =parseInt(year);
        document.getElementById("note-year").innerHTML ='';

    }


}

function calculate() {
    var currentDate = new Date();
  
    // Get the current day
    var cday = currentDate.getDate();
  
    // JavaScript months are zero-based, so you need to add 1 to get the actual month
    var cmonth = currentDate.getMonth() + 1;
  
    // Get the current year
    var cyear = currentDate.getFullYear();
  
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
  
    var yearDiff = cyear - year;
    var monthDiff = cmonth - month;
    var dayDiff = cday - day;
  
    // Adjust the age if the current month is less than the birth month
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
      monthDiff += 12;
    }
  
    // Adjust the age if the current day is less than the birth day
    if (dayDiff < 0) {
      monthDiff--;
      var lastMonthDate = new Date(cyear, cmonth - 1, 0).getDate();
      dayDiff += lastMonthDate;
    }
  if (yearDiff<0){
    yearDiff = 'error';
    monthDiff = 'error';
    dayDiff = 'error';

  }
  if( year%4==0 && month==2 && day>29){
    yearDiff = 'error';
    monthDiff = 'error';
    dayDiff = 'error';
  }

  if(year%2!=0 && month==2 && day>28){
    yearDiff = 'error';
    monthDiff = 'error';
    dayDiff = 'error';
  }
    document.getElementById("year-ans").innerHTML = yearDiff;
    document.getElementById("month-ans").innerHTML = monthDiff;
    document.getElementById("day-ans").innerHTML = dayDiff;
  }

 