export const BASE_URL = "http://localhost:3000";

export const REG_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PATTERN_EMAIL = `[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i`;
export const REG_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9_]).{8,}/;
export const PATTERN_PASSWORD = `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9_]).{8,}`;
// const translation = useContext(TranslationContext);

export const ESC_CODE = 27;

export const DELAY = 500;
