import Button from "./../button";
import Modal from "./../modal";
import Title from "./../title/index";
import Text from "./../text/index";
import TextInput from "./../text-input/index";
import React,{ useState } from "react";

const ModalButtonWrapper = (props) => {
  const {
    buttonText,
    modalTitle,
    modalTextFontSize,
    modalTitleFontSize,
    modalText,
    modalTextColor,
    modalTextLetterSpacing,
    modalTitleColorText,
    modalTitleLetterSpacing,
    buttonModalText,
    inputPlaceholder,
  } = props;

  const [visible, setVisible]=useState(false)
  const [inputValue, setInputValue]=useState(null)
  const [hasError, setHasError]=useState(false)
  const [feedback, setFeedback]=useState(null)

  const onButtonClick = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
    setFeedback(null)
    setHasError(false)
    setInputValue(null)
  };

  const onModalButtonClick = () => {
    const emailValidation= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!inputValue){
      setHasError(true)
      setFeedback("Ingresa el Correo")
    }else if (inputValue && emailValidation.test(inputValue)){
      setHasError(false)
      setFeedback("Gracias por unirte")
    }else{
      setHasError(true)
      setFeedback("Debe ingresar un email")
    }

  };
  return (
    <div className="modal-button-wrapper">
      <Button buttonText={buttonText} onClick={onButtonClick} />
      <Modal visible={visible} onClose={onClose}>
        {modalTitle && (
          <Title
            title={modalTitle}
            fontSize={modalTitleFontSize}
            color={modalTitleColorText}
            letterSpacing={modalTitleLetterSpacing}
          />
        )}
        {modalText && (
          <Text
            text={modalText}
            fontSize={modalTextFontSize}
            color={modalTextColor}
            letterSpacing={modalTextLetterSpacing}
          />
        )}
        <TextInput placeholder={inputPlaceholder} value={inputValue} onChange={setInputValue} hasError={hasError} feedback={feedback}/>
        {buttonModalText && <Button buttonText={buttonModalText} onClick={onModalButtonClick}/>}
      </Modal>
    </div>
  );
};

export default ModalButtonWrapper;
