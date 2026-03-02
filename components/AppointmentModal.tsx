import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppointmentForm from "./AppointmentForm";
import Modal from "./Modal";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    doctorName?: string;
    department?: string;
    serviceName?: string;
  } | null;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("components.appointmentModal.title")}
      subtitle={t("components.appointmentModal.subtitle")}
      icon="calendar_today"
    >
      <AppointmentForm
        key={isOpen ? "open" : "closed"}
        initialData={initialData}
        navigate={navigate}
        onSuccess={onClose}
      />
    </Modal>
  );
};

export default AppointmentModal;
