import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { DateTimePicker } from "@progress/kendo-react-dateinputs";
import { FormInput, FormNumericTextBox } from "./form-components";
import {
  requiredValidator,
  angloValidator,
  scrapeWasteValidator,
  moisturePowderValidator,
  virginPlasticValidator,
  masterBatchValidator,
} from "./validators";

const MyForm = () => {
  const currentDateTime = new Date();

  const handleSubmit = (dataItem) => {
    console.log(dataItem);
    dataItem.dateTime = dataItem.dateTime ? dataItem.dateTime : currentDateTime;
    alert(JSON.stringify(dataItem, null, 2));
  };

  return (
      <div className="my-form">
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
              id={"dateTime"}
              name={"dateTime"}
              label={"DateTime"}
              component={DateTimePicker}
              defaultValue={currentDateTime}
            />

            {/* <Field
              id={"anglo"}
              name={"anglo"}
              label={"Anglo"}
              placeholder={"e.g.: Clevey Thursfield"}
              component={FormInput}
              validator={requiredValidator}
            /> */}

            <Field
              name="scrapeWaste"
              component={FormNumericTextBox}
              min={0}
              label="Scrape Waste"
              validator={scrapeWasteValidator}
            />

            <Field
              name="masterBatch"
              component={FormNumericTextBox}
              min={0}
              label="Master Batch"
              validator={masterBatchValidator}
            />

            <Field
              name="moisturePowder"
              component={FormNumericTextBox}
              min={0}
              label="Moisture Powder"
              validator={moisturePowderValidator}
            />

            <Field
              name="anglo"
              component={FormNumericTextBox}
              min={0}
              label="Anglo"
              validator={angloValidator}
            />

            <Field
              name="virginPlastic"
              component={FormNumericTextBox}
              min={0}
              label="Virgin Plastic"
              validator={virginPlasticValidator}
            />

            <Field
              name="challanNumber"
              component={FormInput}
              label="Challan Number"
            />

            <Field
              name="receivingPerson"
              component={FormInput}
              label="Receiving Person"
            />

            <Field
              name="vehicleNumber"
              component={FormInput}
              label="Vehicle Number"
            />

            <Field name="partyName" component={FormInput} label="Party Name" />

            <Field
              name="cardNumber"
              component={FormInput}
              label="Card Number"
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
    </div>
  );
};

export default MyForm;
