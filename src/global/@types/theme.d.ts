import "styled-components";
// import { type } from "os";
import { THEME } from "../styles/theme";

type ThemeType = typeof THEME;

declare module "styled-component" {
    export interface DefaultTheme extends ThemeType {}
}
