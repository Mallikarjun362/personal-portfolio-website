import { CSS_STRING, HTML_STRING, JSON_STRING } from "./_functionality";

export default function TemplatePostBrowsePage() {
  let RES: string = `<style>${CSS_STRING}</style>${HTML_STRING}`;
  const JSON_OBJ = JSON.parse(JSON_STRING);
  for (let key of Object.keys(JSON_OBJ)) {
    RES = RES.replace(new RegExp(`{% ${key} %}`), JSON_OBJ[key] as any);
  }
  return <main dangerouslySetInnerHTML={{ __html: RES, }}></main>;
}
