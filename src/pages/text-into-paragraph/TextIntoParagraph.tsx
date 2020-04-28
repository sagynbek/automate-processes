import React, { useState, useEffect } from 'react';
import { copyToClipboard } from 'src/helper';



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
      result += text[it].toUpperCase() === text[it] ?
        " " + text[it].toLowerCase()
        : text[it];
    }
    result = result.trim();
    result = isCapitalizeEnabled && result ? (result[0].toUpperCase() + result.slice(1)) : result;

    isCopyToClipboardEnabled && copyToClipboard(result);

    setResult(result);
  }
  console.log(result)

  return (
    <div>
      <div className="">
        <span>
          <input name="capitalize" type="checkbox" checked={isCapitalizeEnabled} onChange={() => { setIsCapitalizeEnabled(!isCapitalizeEnabled) }} /> Capitalize
        </span>
        <span>
          <input name="clipboard" type="checkbox" checked={isCopyToClipboardEnabled} onChange={() => { setIsCopyToClipboardEnabled(!isCopyToClipboardEnabled) }} /> Copy to clipboard
        </span>
        <span>
          <input name="instant-trigger" type="checkbox" checked={isTriggerOnChangeEnabled} onChange={() => { setIsTriggerOnChangeEnabled(!isTriggerOnChangeEnabled) }} /> Trigger on chage
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
