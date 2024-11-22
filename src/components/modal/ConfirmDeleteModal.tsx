import { CrossCircledIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";
import { ConfirmationModal, ConfirmationModalProps } from "./ConfirmModal";

export const ConfirmDeleteModal = (
  props: Omit<ConfirmationModalProps, "onAccept"> & {
    onDelete: () => void;
  } & PropsWithChildren
) => {
  const { children, onDelete, ...rest } = props;

  return (
    <ConfirmationModal
      {...rest}
      onAccept={onDelete}
      acceptLabelKey="Delete"
      rejectButtonVariant="outline"
      acceptButtonVariant="destructive"
      icon={<CrossCircledIcon className="text-destructive" />}
    >
      {children}
    </ConfirmationModal>
  );
};
