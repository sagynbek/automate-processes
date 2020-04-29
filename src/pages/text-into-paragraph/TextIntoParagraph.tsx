import React, { useState, useEffect } from 'react';
import { copyToClipboard, isUpperCase } from 'src/helper';



const TextIntoParagraph = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isCapitalizeEnabled, setIsCapitalizeEnabled] = useState(true);
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
      result += isUpperCase(text[it]) ?
        " " + text[it].toLowerCase()
        : text[it];
    }
    result = result.trim();
    result = isCapitalizeEnabled && result ? (result[0].toUpperCase() + result.slice(1)) : result;

    isCopyToClipboardEnabled && copyToClipboard(result);

    setResult(result);
  }

  return (
    <div>
      <h1>Seperate joined words</h1>
      <div className="example">
        <h3>Examples:</h3>
        <ul>
          <li>camelCasedText => Camel cased text</li>
          <li>helloWorld! => Hello world!</li>
        </ul>
      </div>

      <div className="tool-options">
        <span>
          <input name="capitalize" type="checkbox" checked={isCapitalizeEnabled} onChange={() => { setIsCapitalizeEnabled(!isCapitalizeEnabled) }} /> Capitalize
        </span>
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

export default TextIntoParagraph;
