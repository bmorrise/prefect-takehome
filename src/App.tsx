import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfirmDeleteModal } from "./components/modal/ConfirmDeleteModal";
import { Button } from "./components/base/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleDelete = () => {
    alert("executing delete");
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ConfirmDeleteModal
        onDelete={handleDelete}
        onClose={() => {}}
        title={t("ConfirmDeleteModal.title")}
        isOpen={isOpen}
      >
        {t("ConfirmDeleteModal.body", { value: "default" })}
      </ConfirmDeleteModal>
    </>
  );
}

export default App;
