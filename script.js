function timetick(){
 const element = (
  <div>
     <h1>The Current Time is</h1>
     <h2>The time : { new      Date().toLocaleTimeString()}
         </h2>
  </div>   
 );
  ReactDOM.render(
  element , 
    document.getElementById("root")
   );
}
 setInterval(timetick, 1000);
