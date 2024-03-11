import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="relative"> 
    {/* relative is used to make the modal absolute */}
    {/* relative, modal'ı absolute yani ekranın tamamında göstermek için kullanılır */}
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
}
export default ModalPage;
