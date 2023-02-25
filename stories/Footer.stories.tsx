import type { ComponentMeta, ComponentStory } from "@storybook/react";
// import type { IFooter } from './Footer';
import { Footer } from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Pink = Template.bind({});

Pink.args = {
  bgColor: "#ed60fa",
};
