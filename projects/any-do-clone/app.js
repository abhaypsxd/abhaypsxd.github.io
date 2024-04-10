const day = new Date().getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for(let i=0; i<7; i++) {
    let blk = document.getElementById(`day-${i}`);
    blk.innerHTML = days[(day+i)%7];
}
