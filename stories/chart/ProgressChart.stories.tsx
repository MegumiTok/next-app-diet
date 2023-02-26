import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ProgressChart from "./ProgressChart ";

export default {
  title: "ProgressChart ",
  component: ProgressChart,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ProgressChart>;

const Template: ComponentStory<typeof ProgressChart> = () => <ProgressChart />;

export const Default = Template.bind({});
Default.args = {};
