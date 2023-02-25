import type { ComponentMeta, ComponentStory } from "@storybook/react";
// import type { IHeader } from './Header';
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Blue = Template.bind({});

Blue.args = {
  bgColor: "#60a5fa",
};

export const Second = Template.bind({});

Second.args = {
  bgColor: "#ed60fa",
  logoColor: "#fff",
};
