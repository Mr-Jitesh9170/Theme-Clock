import "./clock.scss"
export const Clock = () => {
  let date = new Date();
  let day = date.getDate();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]


  const setTimeOUt = () => {

  }
  const savedTheme = localStorage.getItem('theme');
  console.log(JSON.parse(savedTheme))
  return (
    <div className="clock-container">
      <div className="dark-mode">Dark Mode</div>
      <div className="clock">
        <div className="needle hour"></div>
        <div className="needle minute"></div>
        <div className="needle second"></div>
        <div className="center-point"></div>
      </div>
      <div className="current-time">
        <span className="time">12:30</span>
        <span className="day">SUN ,<span> DEC</span></span>
      </div>
    </div>
  )
}