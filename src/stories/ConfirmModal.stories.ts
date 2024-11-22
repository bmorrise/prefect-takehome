import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmModal } from "./ConfirmModal";

const meta = {
  title: "Confirm Modal",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },
  args: { title: "Modal Title", children: "Modal Body" },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmDelete: Story = {
  args: {
    title: "Delete Modal Title",
    children: "Delete Modal Body",
  },
};
