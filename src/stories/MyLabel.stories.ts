import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "IU/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    allCaps: { control: "boolean" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom BackgroundColor Label",
    fontColor: "#5517ac",
    backgroundColor: "black",
  },
};
