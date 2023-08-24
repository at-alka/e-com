import React from "react";
import Label from "./Label";
import Box from "../Box/Box";

export default {
  title: "Library/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const sample = Template.bind({});
sample.args = {
  children: "Hello World",
};

export const disableSelect = Template.bind({});
disableSelect.args = {
  children: "Hello World",
  noSelect: true,
};

export const MandatoryLabel = Template.bind({});
MandatoryLabel.args = {
  children: "Hello World",
  isMandatory: true,
  mandatoryText: '(mandatory)',
};

export const WithVariant = Template.bind({});
WithVariant.args = {
  children: "Text",
  variant: "text2",
};

export const WithVariants = () => {
  return (
    <Box>
      <Label fontSize="20px" color="#fff">AntCreatives</Label>
      <Label text="Text1" variant="text1" />
      <Label text="Text2" variant="text2" />
      <Label text="Text3" variant="text3" />
      <Label text="Text4" variant="text4" />
      <Label text="Text5" variant="text5" />
      <Label text="Text6" variant="text6" />
      <Label text="Text7" variant="text7" />
      <Label text="Text8" variant="text8" />
    </Box>
  );
};
