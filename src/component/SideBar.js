import "../styles/SideBar.css";
import calendar from "../assets/SideBar/calendar.png";
import pieChart from "../assets/SideBar/pie-chart-2.png";
import settings from "../assets/SideBar/settings.png";
const SideBar = () => {
  return (
    <div id="side-bar">
      <div id="logo">pl&o</div>
      <div id="items">
        <img src={calendar} /> <img src={pieChart} /> <img src={settings} />
        <div id="loginBtn">로그인</div>
      </div>
    </div>
  );
};
export default SideBar;
