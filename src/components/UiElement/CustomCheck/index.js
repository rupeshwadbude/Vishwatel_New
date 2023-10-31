import { Form } from "antd";
import { useField } from "formik";

function CustomCheck({
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
      name={name}
      help={meta?.error && meta?.touched ? meta.error : ""}
      validateStatus={config?.error ? "error" : "success"}
    >
      <input
        className="form-check-input"
        type="checkbox"
        id="login"
        onChange={(e) => {
          handleChangeSelect(e.target.checked);
        }}
      />
      <label className="form-check-label" htmlFor="login">
        {rest?.label}
      </label>
    </Form.Item>
  );
}

export default CustomCheck;
