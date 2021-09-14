import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput } from "./form-components";
import { requiredValidator } from "./validators";

const MyForm = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: 400,
          }}
          horizontal={true}
        >
          <Field
            id={"fullName"}
            name={"fullName"}
            label={"Full Name"}
            placeholder={"e.g.: Clevey Thursfield"}
            component={FormInput}
            validator={requiredValidator}
          />
          <div className="k-form-buttons">
            <Button
              primary={true}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </div>
        </FormElement>
      )}
    />
  );
};

export default MyForm;