import React, { ChangeEvent } from "react";
import { Colors } from "../../colors";
import { J_InputInterface } from "./J_InputInterface";

const J_input: React.FC<J_InputInterface> = ({
  required,
  value,
  change,
  label,
  leftAdornment,
  rightAdornment,
  leftAdornmentText,
  rightAdornmentText,
  leftAdornmentIcon,
  disabled = false,
  rightAdornmentIcon,
  widthInput = 200,
  placeholder,
  type,
  id,
  name,
  leftAdornmentClick,
  rightAdornmentClick,
  min,
  minLength,
  max,
  maxLength,
  multiline,
  center,
  inputStyleProps,
  labelStyleProps,
  leftAdornmentStyleProps,
  rightAdornmentStyleProps,
  mask
}) => {
  const hightInput = 40
  const widthAdornment = 50

  const containerStyle: React.CSSProperties = {
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'column'
  }

  const labelStyle: React.CSSProperties = {
    color: Colors.text,
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center'
  }

  const inputStyle: React.CSSProperties = {
    width: widthInput,
    height: hightInput,
    border: `1px solid ${Colors.border}`,
    borderRadius: 8,
    borderTopLeftRadius: leftAdornment ? 0 : 8,
    borderBottomLeftRadius: leftAdornment ? 0 : 8,
    borderTopRightRadius: rightAdornment ? 0 : 8,
    borderBottomRightRadius: rightAdornment ? 0 : 8,
    color: Colors.text,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: center ? 'center' : 'left'
  }

  const leftAdornmentStyle: React.CSSProperties = {
    width: widthAdornment,
    backgroundColor: Colors.backgroundAdornment,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    cursor: leftAdornmentClick !== undefined ? 'pointer' : 'default'
  }

  const rightAdornmentStyle: React.CSSProperties = {
    width: widthAdornment,
    backgroundColor: Colors.backgroundAdornment,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    cursor: rightAdornmentClick !== undefined ? 'pointer' : 'default'
  }

  function addMask(inputValue: string) {
    if(!mask) return inputValue
    const numericValue = inputValue.replace(/\D/g, "");
    let i = 0;
    const formattedValue = mask.replace(/#/g, () => numericValue[i++] || "");
    return  formattedValue;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (change) {
      if(mask && value && typeof value === 'string' && e.target.value.length > value.length) {
        change(addMask(e.target.value))
      } else {
        change((e.target.value))
      }
    }
  }

  return (
    <div style={containerStyle}>
      {/* Label */}
      <label style={{...labelStyle, ...labelStyleProps}}>
        {label} <span style={{ color: 'red' }}>{required && '*'}</span>
      </label>
      <div style={{ display: 'flex' }}>
        {/* LeftAdornment */}
        {leftAdornment && (
          <div onClick={leftAdornmentClick} style={{...leftAdornmentStyle, ...leftAdornmentStyleProps}}>
            {leftAdornmentText && leftAdornmentText}
            {leftAdornmentIcon && leftAdornmentIcon}
          </div>
        )}

        {/* Input */}
        <input
          id={id}
          name={name}
          disabled={disabled}
          style={{...inputStyle, ...inputStyleProps}}
          value={value || undefined}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          type={type}
          max={max}
          maxLength={maxLength}
          min={min}
          minLength={minLength}
          multiple={multiline}
          required={required}
        />

        {/* RightAdornment */}
        {rightAdornment && (
          <div onClick={rightAdornmentClick} style={{...rightAdornmentStyle, ...rightAdornmentStyleProps}}>
            {rightAdornmentText && rightAdornmentText}
            {rightAdornmentIcon && rightAdornmentIcon}
          </div>
        )}
      </div>
    </div>
  );
}

export default J_input;
