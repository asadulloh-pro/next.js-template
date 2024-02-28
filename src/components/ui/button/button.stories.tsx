import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { IProps } from "./button.component";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  type: "primary",
};
