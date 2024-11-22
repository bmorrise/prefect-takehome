import { PropsWithChildren, ReactNode } from "react";
import { Button, ButtonVariants } from "../base/Button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../base/Dialog";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "@/i18n";

/**
 * Confirmation Modal Component Props
 *
 * @param isOpen - boolean to determine if the modal is open
 * @param onClose - function to execute on modal close
 * @param onAccept - function to execute on modal accept
 * @param title - title of the modal
 * @param acceptLabelKey - i18n key for the accept button label
 * @param rejectLabelKey - i18n key for the reject button label
 * @param rejectButtonVariant - button variant for the reject button
 * @param acceptButtonVariant - button variant for the accept button
 * @param icon - icon to display in the modal
 * @param componentOverrides - object to override the default components
 * @param children - children to display in the modal
 */
export type ConfirmationModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  title: ReactNode;
  acceptLabelKey?: TranslationKeys;
  rejectLabelKey?: TranslationKeys;
  rejectButtonVariant?: ButtonVariants["variant"];
  acceptButtonVariant?: ButtonVariants["variant"];
  icon?: ReactNode;
  componentOverrides?: {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
  };
}>;

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onAccept,
  icon,
  title,
  acceptLabelKey = "OK",
  rejectLabelKey = "Cancel",
  rejectButtonVariant = "default",
  acceptButtonVariant = "secondary",
  children,
  componentOverrides,
}: ConfirmationModalProps) => {
  const { t } = useTranslation();

  const HeaderComponent = componentOverrides?.header || (
    <DialogHeader>
      <DialogTitle>
        {icon}
        {title}
      </DialogTitle>
    </DialogHeader>
  );

  const BodyComponent = componentOverrides?.body || (
    <DialogBody>{children}</DialogBody>
  );

  const FooterComponent = componentOverrides?.footer || (
    <DialogFooter>
      <DialogClose>
        <Button variant={rejectButtonVariant}>{t(rejectLabelKey)}</Button>
      </DialogClose>
      <DialogClose>
        <Button variant={acceptButtonVariant} onClick={onAccept}>
          {t(acceptLabelKey)}
        </Button>
      </DialogClose>
    </DialogFooter>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {HeaderComponent}
        {BodyComponent}
        {FooterComponent}
      </DialogContent>
    </Dialog>
  );
};
