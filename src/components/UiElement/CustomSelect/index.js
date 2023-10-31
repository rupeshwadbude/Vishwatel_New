import React from "react";
import { Form } from "antd";
import { useField } from "formik";
// import { useField } from "formik";

export default function CustomSelect({
  name,
  icon,
  setFieldValue,
  arrayOfData = [],
  onSelectChange,
  extraClassName,
  placeholder,
  defaultValue,
  ...rest
}) {
  const [field, meta, helpers] = useField(name);

  const config = { ...field, ...rest };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  const handleChangeSelect = (value) => {
    helpers.setValue(value);
    helpers.setError("");
    helpers.setTouched(false);
  };

  return (
    <>
      <Form.Item
        className="mb-0"
        label={rest?.label}
        // help={meta.error && meta?.error && meta?.touched ? meta.error : ""}
        // validateStatus={config.error ? "error" : "success"}
      >
        {icon}
        <select
          className="form-select form-control"
          size="large"
          // {...field}
          {...rest}
          onChange={handleChangeSelect}
          // onSearch={onSearch}
          data-placeholder={placeholder}
          defaultValue={defaultValue}
        >
          {arrayOfData.map((item) => (
            <option
              key={item?.id || item.name}
              disabled={item?.disabled || false}
              value={item.id}
            >
              {item?.name || `${item?.firstName}${" "}${item?.lastName}`}
            </option>
          ))}
        </select>
      </Form.Item>
    </>
  );
}
