/* lazyass.jpg */
/* Just alias the setTimeout function :D */

const ScheduleJob = (fn, ms) => setTimeout(fn, ms);

ScheduleJob(() => { alert("This will appear after 5sec.")}, 5000);