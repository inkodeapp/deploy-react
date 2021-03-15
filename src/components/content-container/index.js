import "./index.css";
import Title from "./../title";
import Text from "./../text";
import ModalButtonWrapper from "./../modal-button-wrapper";
const ContentContainer = () => {
  return (
    <div className="content-container">
      <Title
        title="PROXIMAMENTE"
        fontSize="75px"
        color="black"
        letterSpacing="10px"
      />
      <Text
        text="!Vamos a celebrar el lanzamiento de nuestro nuevo sitio¡"
        color="black"
        fontSize="14px"
        letterSpacing="2px"
      />
      <ModalButtonWrapper
        buttonText="Notificarme"
        modalTitle="REGÍSTRATE"
        modalTitleFontSize="40px"
        modalTitleLetterSpacing="3px"
        modalText="Y mira antes que nadie las novedades"
        buttonModalText="Unirse"
        inputPlaceholder="Ingresá tu email aquí"
      />
    </div>
  );
};

export default ContentContainer;
