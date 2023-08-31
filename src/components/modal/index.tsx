import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import * as S from "./styles";

import Loading from "../loading";
import Button from "../button";
import useWindowDimensions from "../../hooks";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleDelete: () => void;
  titleModal?: string;
  cancelText?: string;
  confirmText?: string;
  confirmationLoading?: boolean;
}

const ConfirmationModal = ({
  open,
  setOpen,
  handleDelete,
  titleModal,
  cancelText,
  confirmText,
  confirmationLoading,
}: ModalProps) => {
  const [loading, setLoading] = useState(false);
  const { isMobile } = useWindowDimensions();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = async () => {
    if (confirmationLoading) {
      setLoading(true);
    }

    try {
      await handleDelete();
      setLoading(false);
      handleClose();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      {open && (
        <S.Overlay>
          <S.ModalContent>
            <S.CloseButton>
              <AiOutlineClose title="fechar" size={20} onClick={handleClose} />
            </S.CloseButton>

            <S.ModalContentInner>
              <S.ModalTitle fontSize={isMobile ? "small" : "large"}>
                {titleModal}
              </S.ModalTitle>

              <div className="button-container">
                <Button
                  variant="outlined"
                  onClick={handleDeleteClick}
                  disabled={loading}
                >
                  {loading ? (
                    <Loading borderColor="secondary" size="small" />
                  ) : (
                    confirmText
                  )}
                </Button>
                {!loading && (
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    disabled={loading}
                  >
                    {cancelText}
                  </Button>
                )}
              </div>
            </S.ModalContentInner>
          </S.ModalContent>
        </S.Overlay>
      )}
    </div>
  );
};

export default ConfirmationModal;
