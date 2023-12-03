import "./index.sass";
import Button from "../button";
import { Link } from "react-router-dom";

interface Props {
  showModal?: boolean;
  handleModal: (bool: boolean) => void;
}

export default function Login(props: Props) {
  const renderAccountForm = (
    <>
      <h3>Driver's Last name</h3>
      <input
        type="text"
        className="input"
        title="Last Name"
        autoComplete="family-name"
      />
      <h3>BC driver's licence number</h3>
      <input type="text" className="input" title="Licence Number" />
      <h3>Keyword</h3>
      <input type="text" className="input" title="Keyword" />
    </>
  );

  return (
    <div
      className={`modal ${props.showModal ? "show" : ""}`}
      onClick={() => props.handleModal(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Sign In</h2>
        </div>
        <div className="modal-body">{renderAccountForm}</div>
        <div className="modal-footer">
          <Link to="/dashboard">
            <Button
              variant="secondary"
              onClick={() => props.handleModal(false)}
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
