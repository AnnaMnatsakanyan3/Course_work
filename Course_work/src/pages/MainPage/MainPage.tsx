import React, { FC, useState, useEffect } from 'react'; import * as S from './MainPage.styles';
import { CommonLayout } from '@components/Layouts/CommonLayout';
import { ModalComponentPropsType } from '@components/UI/Modal/Modal.reducer';
import { HelpModal } from '@components/Modals/HelpModal';
import { AuthorModal } from '@components/Modals/AuthorModal';
import { ConfirmModal } from '@components/Modals/ConfirmModal';
import { AdvicesModal } from '@components/Modals/AdvicesModal';
import { Button } from '@components/UI/Button';
import Refresh from '@assets/refresh.png';

interface IMainPage {
  isModalVisible: boolean;
  showModal: (component: FC, componentProps?: ModalComponentPropsType) => void;
}

export const MainPage = ({ showModal }: IMainPage): JSX.Element => {
  const [menu, toggleMenu] = useState(false);
  const [deletedArrays, setDeletedArrays] = useState<number[][]>([]);
  const [NavItemWindow, setNavItemWindow] = useState<number | null>(null);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const length = 5;
  const createRandom = () => {
    return Array.from(
      { length: length },
      () => Math.floor(Math.random() * 40) + 10
    );
  };
  const deleteRow = (arr: number[][]) => {
    if (arr.length > 0) {
      const newArr = arr.slice(0);
      let max = 1;
      let index = -1;
      matrix.map((item, ind) => {
        const itemMax = Math.max(...item);
        if (itemMax >= max) {
          max = itemMax;
          index = ind;
        }
      });
      newArr.splice(index, 1);
      const deleted = [];
      deleted.push(arr[index]);
      setDeletedArrays([...deletedArrays, ...deleted]);
      setMatrix(newArr);
    }
  };
  const updateMatrix = () => {
    setDeletedArrays([]);
    const newMatrix = [];
    for (let i = 0; i < length; i++) {
      newMatrix.push(createRandom());
    }
    setMatrix(newMatrix);
  };
  useEffect(() => {
    toggleMenu(false);
  }, [NavItemWindow]);
  useEffect(() => {
    updateMatrix();
  }, []);
  return (
    <CommonLayout>
      <S.NavItems>
        <S.NavItem
          onClick={() => {
            setNavItemWindow(0), toggleMenu(!menu);
          }}
        >
          Menu
        </S.NavItem>
        <S.NavItem onClick={() => setNavItemWindow(1)}>
          Window
          {NavItemWindow === 1 && (
            <S.NavItemWindow>
              <span>Vertical</span>
              <span>Horizontal</span>
            </S.NavItemWindow>
          )}
        </S.NavItem>
        <S.NavItem onClick={() => setNavItemWindow(2)}>
          Help
          {NavItemWindow === 2 && (
            <S.NavItemWindow>
              <span onClick={() => showModal(AuthorModal)}>Author</span>
              <span onClick={() => showModal(HelpModal)}>Help</span>
            </S.NavItemWindow>
          )}
        </S.NavItem>
      </S.NavItems>
      <S.Menu isOpen={menu}>
        <p onClick={() => toggleMenu(!menu)}>Matrix exercise</p>
        <ul>
          <li onClick={() => showModal(AdvicesModal)}>Daily suggestions</li>
          <li onClick={() => showModal(ConfirmModal)}>Exit</li>
        </ul>
      </S.Menu>
      <S.PageContent onClick={() => setNavItemWindow(0)}>
        <S.Matrix>
          <S.ButtonsWrapper>
            <Button onClick={() => updateMatrix()}>
              <img src={Refresh} />
            </Button>
            <Button onClick={() => deleteRow(matrix)}>
              Delete Row with Max Element
            </Button>
          </S.ButtonsWrapper>
          {matrix.map((item, index) => (
            <li key={index}>
              {item.map((el, ind) => (
                <span key={ind}>{el}</span>
              ))}
            </li>
          ))}
        </S.Matrix>
        <S.DeletedItems>
          Deleted rows
          {deletedArrays.map((item, index) => (
            <div key={index}>
              {item.map((el, ind) => (
                <li key={ind}>{el}</li>
              ))}
            </div>
          ))}
        </S.DeletedItems>
      </S.PageContent>
    </CommonLayout>
  );
};
