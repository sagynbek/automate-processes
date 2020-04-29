import { toast } from "react-toastify";

export const copyToClipboard = (text: any) => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  toast("Copied to clipboard!", { type: "info" });
  return true;
}

export const isUpperCase = (char: string) => {
  return char === char.toUpperCase() && char.match(/[a-zA-Z]/i);
}

export const isLowerCase = (char: string) => {
  return char === char.toLowerCase() && char.match(/[a-zA-Z]/i);
}