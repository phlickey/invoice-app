import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../components";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Click Here",
};

export const NewInvoice = Template.bind({});
NewInvoice.args = {
  withIcon: true,
  children: "New Invoice",
};

export const MarkAsPaid = Template.bind({});
MarkAsPaid.args = {
  withIcon: false,
  children: "Mark as Paid",
};
