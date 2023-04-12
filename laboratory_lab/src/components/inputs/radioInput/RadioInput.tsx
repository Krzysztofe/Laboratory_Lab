interface Props {
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  containerClass?: string;
  inuptClass?: string;
  labelClass?: string;
}

const RadioInput = (props: Props) => {
  return (
    <div className={props.containerClass}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.handleChange}
        className={props.inuptClass}
        id={props.value}
      />
      <label htmlFor={props.value} className={props.labelClass}>
        {props.value}
      </label>
    </div>
  );
};

export default RadioInput;
