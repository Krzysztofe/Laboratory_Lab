export interface Props {
  type: string;
  name: string;
  value: string | number;
  label: string;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress?: (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string | number
  ) => void;
  handleTouchStart?: (
    e: React.TouchEvent<HTMLInputElement>,
    inputValue: string
  ) => void;
  placeholder?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

const TextInput = (props: Props) => {
  return (
    <div className={props.containerClass}>
      <label htmlFor={props.name} className={props.labelClass}>
        {props.label}
      </label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onKeyDown={e =>
          props.handleKeyPress &&
          props.handleKeyPress(e, props.value.toString())
        }
        onTouchStart={e =>
          props.handleTouchStart &&
          props.handleTouchStart(e, props.value.toString())
        }
        onBlur={props.handleBlur}
        placeholder={props.placeholder}
        className={props.inputClass}
      />
    </div>
  );
};

export default TextInput;
