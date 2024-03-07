import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

//   const handleClick = (index) => {
//     setExpandedIndex(index);
//   };

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    // const content = isExpanded && <div>{item.content}</div>
    // const handleClick = () => {
    //     setExpandedIndex(index);
    // };

    return (
      <div key={item.id}>
        <div
          //   onClick={() => {
          //     console.log(index);
          //     setExpandedIndex(index);
          //   }}
        //   onClick={handleClick}
            onClick={() => handleClick(index)}
        >
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
