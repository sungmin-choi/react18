import { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: calc(100vw - 32px);
  height: calc(100vh - 32px);
  background: rgb(25, 31, 44);
  color: white;
`;

function Modal({ setIsOpenModal }) {
  return (
    <Background>
      <ModalContainer>
        <h1>MODAL</h1>
        <button onClick={() => setIsOpenModal(false)}>
          <h2>close</h2>
        </button>
      </ModalContainer>
    </Background>
  );
}

export default function Section1() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <section>
      {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
      <header>
        <h2>
          모바일(safari, chrome)에서 100vh 네비바 로 인한 화면 가려지는 현상
          해결하기
        </h2>
      </header>
      <button onClick={handleOpenModal}>모달 열람</button>
    </section>
  );
}
