import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Marker } from "./Marker";

export default {
  title: "Marker",
  component: Marker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Marker>;

const Template: ComponentStory<typeof Marker> = (args) => <Marker {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "ハロー",
};
