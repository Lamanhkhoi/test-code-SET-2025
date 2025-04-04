function planeSeat(a){
    const number = parseInt(a);
    const letter = a[a.length - 1];
    if (number > 60 || letter == 'I' || letter == 'J') return 'No Seat!!';
    return `${number > 20 ? number > 40 ? 'Back-' : 'Middle-' : 'Front-'}${letter > 'C' ? letter > 'F' ? 'Right' : 'Middle' : 'Left'}`;
  }
// tìm hiểu thêm
a = "2B"
console.log(planeSeat(a))