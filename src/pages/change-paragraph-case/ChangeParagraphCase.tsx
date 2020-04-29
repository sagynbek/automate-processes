import React, { useState, useEffect } from 'react';
import { copyToClipboard, isUpperCase } from 'src/helper';


const SENTECE_END_SIGNS = [".", '!', '?'];

const ChangeParagraphCase = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isCopyToClipboardEnabled, setIsCopyToClipboardEnabled] = useState(true);
  const [isTriggerOnChangeEnabled, setIsTriggerOnChangeEnabled] = useState(true);


  useEffect(() => {
    isTriggerOnChangeEnabled && textIntoParagraphFunc(text);
  }, [text]);

  const onTextChange = (e: any) => {
    setText(e.target.value);
  }



  const textIntoParagraphFunc = (text: string) => {
    if (!text) { return; }

    let result = "";
    for (let it = 0; it < text.length; it++) {
      if (isUpperCase(text[it])
        && (
          it === 0
          || (it - 1 >= 0 && SENTECE_END_SIGNS.includes(text[it - 1])) // New sentence without space break
          || (it - 2 >= 0 && text[it - 1] === "" && SENTECE_END_SIGNS.includes(text[it - 2])) // If new sentence
          || (it + 1 < text.length && isUpperCase(text[it + 1])) // If consecutively upperCases
          || (it - 1 >= 0 && isUpperCase(text[it - 1])) // If consecutively upperCases
        )
      ) {
        result += text[it];
      }
      else {
        result += text[it].toLowerCase();
      }
    }
    result = result.trim();
    result = result ? (result[0].toUpperCase() + result.slice(1)) : result;

    isCopyToClipboardEnabled && copyToClipboard(result);

    setResult(result);
  }

  return (
    <div>
      <h1>Fix paragraph cases</h1>
      <div className="example">
        <h3>Examples:</h3>
        <ul>
          <li>Upper Cased Text => Upper cased text</li>
          <li>Long Paragraph. With 2 Sentences  => Long paragraph. With 2 senteces</li>
        </ul>
      </div>
      <div className="tool-options">
        <span>
          <input name="clipboard" type="checkbox" checked={isCopyToClipboardEnabled} onChange={() => { setIsCopyToClipboardEnabled(!isCopyToClipboardEnabled) }} /> Copy to clipboard on result change
        </span>
        <span>
          <input name="instant-trigger" type="checkbox" checked={isTriggerOnChangeEnabled} onChange={() => { setIsTriggerOnChangeEnabled(!isTriggerOnChangeEnabled) }} /> Trigger on change
        </span>
      </div>

      <div className="left-box">
        <textarea name="text" value={text} onChange={onTextChange} />
      </div>

      <div className="right-box">
        <textarea name="result" value={result} disabled />
      </div>

      <div className="center-action">
        <button onClick={() => { textIntoParagraphFunc(text) }}>Copy to clipboard</button>
      </div>

    </div>
  );
}

export default ChangeParagraphCase;
