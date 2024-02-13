import { Breakpoints } from "../variables/variables";

export const Mobile = () => {
  return `@media (max-width: ${Breakpoints.$extraSmall})`;
};

export const Tablet = () => {
  return `@media (max-width: ${Breakpoints.$small})`;
};

export const Laptop = () => {
  return `@media (max-width: ${Breakpoints.$medium})`;
};

export const Desktop = () => {
  return `@media (max-width: ${Breakpoints.$large})`;
};

export const LargeDesktop = () => {
  return `@media (min-width: ${Breakpoints.$large})`;
};
