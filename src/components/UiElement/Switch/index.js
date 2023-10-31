import { Form, Switch } from "antd";
import { useField } from "formik";

function CustomSwitch({
  name,
  onChange,
  onItemChange,
  checked,
  defaultChecked,
  ...rest
}) {
  const [field, meta, helpers] = useField(name);
  const config = { ...field, ...rest };

  if (meta && meta?.touched && meta?.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  const handleChangeSelect = (target) => {
    helpers.setValue(target);
    if (onChange) onChange(target);
    if (onItemChange) onItemChange(target);
  };

  return (
    <Form.Item
      label={rest?.label}
      name={name}
      help={meta?.error && meta?.touched ? meta.error : ""}
      validateStatus={config?.error ? "error" : "success"}
    >
      <Switch
        type="switch"
        checked={checked}
        onChange={handleChangeSelect}
        defaultChecked={defaultChecked}
        {...rest}
      />
    </Form.Item>
  );
}

export default CustomSwitch;
