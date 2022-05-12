import { TextField } from "@material-ui/core";
import styles from './Input.module.css';

export default function Input({
  label,
  placeholder,
  disabled,
  ...rest
})  {
  return (
    <TextField
      {...rest}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      className={styles.Input}
      variant="standard"
    />
  )
}
