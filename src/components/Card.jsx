const Card = ({ showCategory }) => {
  return (
    <>
      <div className="main">
        {showCategory.map((elem, idx) => {
          return (
            <>
              <div key ={idx} className="img-content">
                <div className="image">
                  <img src={elem.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="title">{elem.title}</p>
                  <span>
                    <strong>short</strong> by {elem.author} / {elem.time} {elem.date}
                          </span>
                          <p>{elem.content}</p>
                          <a href={elem.readMoreUrl}>readMore </a>
                      </div>
                      
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Card;
