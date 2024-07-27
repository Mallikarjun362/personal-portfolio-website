export default function CurrentPageGlobalColorTheme({
  fg = "#000",
  mg = "#888",
  bg = "#eee",
  mgx = "#666",
  bgx = "#ddd",
  fgx = "#000",
  focusShade = "#ccc",
}: {
  fg?: string;
  mg?: string;
  bg?: string;
  mgx?: string;
  bgx?: string;
  fgx?: string;
  focusShade?: string;
}) {
  // DESIGN SYSTEM COLOR THEM CSS VARIABLES
  const obj: { [k: string]: string } = {
    fg,
    mg,
    bg,
    mgx,
    bgx,
    fgx,
    focusShade,
  };
  ;
  return (
    <style>{`:root { ${Object.keys(obj).map((k: any) => `--${k}: ${obj[k]};`).join('')} }`}</style>
  );
}
