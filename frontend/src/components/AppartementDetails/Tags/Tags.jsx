import "../../style.css";

function Tags({ tags }) {

  if (!Array.isArray(tags) || tags.length === 0) {
    return <div className="tags">Aucun tag disponible</div>;
  }
  
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
