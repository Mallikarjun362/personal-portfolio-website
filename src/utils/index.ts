export const toJSON = (obj: any) => JSON.parse(JSON.stringify(obj));

interface IColorPalette {
  bg?: string;
  fg?: string;
  mg?: string;
  focusShade?: string;
}

export const changeColorSystem = ({
  bg = "#eee",
  fg = "black",
  mg = "gray",
  focusShade = "#0002",
}: IColorPalette) => {
  const root: any = document?.querySelector(":root");
  root?.style.setProperty("--fg", fg);
  root?.style.setProperty("--mg", mg);
  root?.style.setProperty("--bg", bg);
  root?.style.setProperty("--focusShade", focusShade);
};
