/**
 *  Typescript template for a simple component story
 */

import React from "react";
import TaskCard from "../TaskCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Task Card",
  component: TaskCard,
} as ComponentMeta<typeof TaskCard>;

export const Primary: ComponentStory<typeof TaskCard> = () => (
  <TaskCard title={"Primary"} description={"A small description"} tags={[]} />
);

export const Secondary: ComponentStory<typeof TaskCard> = () => (
  <TaskCard
    title={"Secondary"}
    description={"A small description"}
    tags={["important", "mandatory", "thisweek"]}
  />
);
