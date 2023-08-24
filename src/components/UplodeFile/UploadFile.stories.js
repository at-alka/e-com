import { height, width } from "styled-system";
import UploadFile from "./UploadFile";

export default {
  title: "Library/Upload",
  component: UploadFile,
};

const Template = (args) => (
  <div style={{ width: "100%" }}>
    <UploadFile {...args} />
  </div>
);

export const TemplateUploadFile = Template.bind({});

TemplateUploadFile.args = {
  bg: "#004c73",
  height: "41px",
  width: "55%",
};
