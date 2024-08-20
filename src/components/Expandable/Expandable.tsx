import { ReactNode, useState } from 'react';
// import './Expandable.css';

interface ExpandableProps {
  children: string;
  maxChars?: number; //made it optional '?'
}
// default maxChars = 100
function Expandable({ children, maxChars = 100 }: ExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  //   if chars less than limit, just display them as <p>
  if (children.length <= maxChars) return <h2>{children}</h2>;

  //  given text, if > 20 chars then cut it + add ... ;
  function truncateText(text: string) {
    return text.substring(0, maxChars) + '...';
  }

  //   toggle Expanded state
  function onHandleClick() {
    setIsExpanded(!isExpanded);
  }

  //   if not Expanded? truncate the text : otherwise display full text
  const displayText = isExpanded === true ? children : truncateText(children);
  const buttonState = isExpanded === true ? 'Less..' : 'Expand..';

  return (
    <>
      <div>
        <h2 className="text">
          {displayText} <button onClick={onHandleClick}>{buttonState}</button>
        </h2>
      </div>
    </>
  );
}

export default Expandable;
