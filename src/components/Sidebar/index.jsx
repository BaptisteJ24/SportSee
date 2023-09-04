const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <img src="/assets/yoga.svg" alt="yoga icon" />
        </li>
        <li className="sidebar__item">
          <img src="/assets/swimming.svg" alt="swimming icon" />
        </li>
        <li className="sidebar__item">
          <img src="/assets/cycling.svg" alt="cycling icon" />
        </li>
        <li className="sidebar__item">
          <img src="/assets/bodybuilding.svg" alt="bodybuilding icon" />
        </li>
      </ul>
      <p className="sidebar__copyright">Copyright SportSee 2023</p>
    </div>
  );
};

export default Sidebar;
