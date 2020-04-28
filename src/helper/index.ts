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