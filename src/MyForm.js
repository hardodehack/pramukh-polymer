import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { DateTimePicker } from "@progress/kendo-react-dateinputs";
import { FormInput } from "./form-components";
import { requiredValidator } from "./validators";

const MyForm = () => {
  const currentDateTime = new Date();

  const handleSubmit = (dataItem) => {
    console.log(dataItem);
    dataItem.dateTime = dataItem.dateTime ? dataItem.dateTime : currentDateTime;
    alert(JSON.stringify(dataItem, null, 2));
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: 400,
          }}
        >
          <div className="form-fields">
            <Field
              id={"fullName"}
              name={"fullName"}
              label={"Full Name"}
              placeholder={"e.g.: Clevey Thursfield"}
              component={FormInput}
              validator={requiredValidator}
            />

            <Field
              id={"anglo"}
              name={"anglo"}
              label={"Anglo"}
              placeholder={"e.g.: Clevey Thursfield"}
              component={FormInput}
              validator={requiredValidator}
            />

            <Field
              id={"dateTime"}
              name={"dateTime"}
              label={"DateTime"}
              component={DateTimePicker}
              defaultValue={currentDateTime}
            />
          </div>
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
