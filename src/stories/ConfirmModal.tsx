import { ConfirmDeleteModal } from "@/components/modal/ConfirmDeleteModal";
import { ConfirmationModalProps } from "@/components/modal/ConfirmModal";
import { Button } from "@/components/base/Button";
import { useState } from "react";

export const ConfirmModal = ({
  title,
  children,
}: Pick<ConfirmationModalProps, "title" | "children">) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Delete Modal</Button>
      <ConfirmDeleteModal
        onDelete={() => alert("Executing Delete")}
        onClose={() => setIsOpen(false)}
        title={title}
        isOpen={isOpen}
      >
        {children}
      </ConfirmDeleteModal>
    </>
  );
};
