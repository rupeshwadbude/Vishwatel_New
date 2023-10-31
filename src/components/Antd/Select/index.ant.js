import React from "react";
import { Form, Select as AntSelect } from "antd";
// import { useField } from "formik";

const { Option } = AntSelect;

export default function Select({
  name,
  icon,
  // setFieldValue,
  // handleChangeSelect,
  arrayOfData = [],
  onSelectChange,
  extraClassName,
  placeholder,
  defaultValue,
  callback,
  ...rest
}) {
  // const [field, meta, helpers] = useField(name);

  // const config = { ...field, ...rest };

  // if (meta && meta.touched && meta.error) {
  //   config.error = true;
  //   config.helperText = meta.error;
  // }

  const handleChangeSelect = () => {
    // helpers.setValue(value);
    // helpers.setError("");
    // helpers.setTouched(false);
    // callback(value);
  };

  // const onSearch = (value) => {
  //   console.log("search:", value);
  // };

  return (
    <>
      <Form.Item
        className="mb-0"
        label={rest?.label}
        // help={meta.error && meta?.error && meta?.touched ? meta.error : ""}
        // validateStatus={config.error ? "error" : "success"}
      >
        {icon}
        <AntSelect
          size="large"
          // {...field}
          {...rest}
          onChange={handleChangeSelect}
          // onSearch={onSearch}
          placeholder={placeholder}
          defaultValue={defaultValue}
        >
          {arrayOfData.map((item) => (
            <Option
              key={item?.id || item.name}
              disabled={item?.disabled || false}
              value={item.id}
            >
              {item?.name || `${item?.firstName}${" "}${item?.lastName}`}
            </Option>
          ))}
        </AntSelect>
      </Form.Item>
    </>
  );
}
