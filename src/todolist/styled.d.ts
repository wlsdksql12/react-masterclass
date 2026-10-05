import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    liColor: string;
    bgColor: string;
    accentColor: string;
  }
}
