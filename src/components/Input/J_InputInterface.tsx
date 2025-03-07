import { MouseEventHandler, ReactElement } from "react";

export interface J_InputInterface {
  required?: boolean;
  value?: string | number | readonly string[] | undefined | null;
  label?: string;
  leftAdornment?: boolean;
  rightAdornment?: boolean;
  disabled?: boolean;
  leftAdornmentText?: string;
  rightAdornmentText?: string;
  widthInput?: number | string;
  placeholder?: string;
  leftAdornmentClick?: MouseEventHandler<HTMLDivElement>;
  rightAdornmentClick?: MouseEventHandler<HTMLDivElement>;
  leftAdornmentIcon?: ReactElement<any, any>;
  rightAdornmentIcon?: ReactElement<any, any>;
  change?: (e: any) => void;
  type?: string;
  id?: string;
  name?: string;
  multiline?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
  center?: boolean;
  inputStyleProps?: React.CSSProperties;
  labelStyleProps?: React.CSSProperties;
  leftAdornmentStyleProps?: React.CSSProperties;
  rightAdornmentStyleProps?: React.CSSProperties;
}
