import "./index.css";
const Modal = (props) => {
  const { visible, children, onClose } = props;

  const onCloseHandler = () => {
    onClose && onClose();
  };
  return visible ? (
    <div className="landing-modal--container">
      <div className="landing-modal">
        <div className="landing-modal--close-icon" onClick={()=>onCloseHandler()}></div>
        {children}
      </div>
      <div className="landing-modal--overlay"></div>
    </div>
  ) : null;
};
export default Modal;
