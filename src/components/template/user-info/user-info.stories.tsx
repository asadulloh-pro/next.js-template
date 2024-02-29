import React from "react";
import { Story, Meta } from "@storybook/react";
import UserInfo from "./user-info.component";
import { IUser } from "@/types/interfaces";
import data from "@/mock/data/users.json";

export default {
  title: "Components/UserInfo",
  component: UserInfo,
} as Meta;

const Template: Story<IUser> = (args) => (
  <div className="max-w-[136px]">
    <UserInfo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = data.single;
