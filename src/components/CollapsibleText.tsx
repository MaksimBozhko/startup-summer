import { useState } from 'react';

export function CollapsibleText({ text }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapsedText = text.slice(0, Math.round(text.length * 0.2));
  const buttonText = isExpanded ? 'Свернуть' : 'Развернуть';

  return (
    <div>
      <p>
        {isExpanded ? text : collapsedText}
        {text.length > collapsedText.length && (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {buttonText}
          </button>
        )}
      </p>
    </div>
  );
}