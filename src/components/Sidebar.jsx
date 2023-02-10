
const Sidebar = ({setCategory}) => {
  

  return (
    <>
      <div className="sidebar">
        <div className="category">
          <span>Category</span>
          <ul className="ul">
            <li onClick={()=>setCategory('all')}>All News</li>
            <li onClick={() => setCategory("national")}>national</li>
            <li onClick={() => setCategory("business")}>business</li>
            <li onClick={() => setCategory("sports")}>sports</li>
            <li onClick={() => setCategory("world")}>world</li>
            <li onClick={() => setCategory("politics")}>politics</li>
            <li onClick={() => setCategory("technology")}>technology</li>
            <li onClick={() => setCategory("startup")}>startup</li>
            <li onClick={() => setCategory("entertainment")}>entertainment</li>
            <li onClick={() => setCategory("miscellaneous")}>miscellaneous</li>
            <li onClick={() => setCategory("hatke")}>hatke</li>
            <li onClick={() => setCategory("science")}>science</li>
            <li onClick={() => setCategory("automobile")}>automobile</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
