import Portal from '@/utils/Portal';
import React from 'react';
import Button from '@/components/commons/Button';
import Image from 'next/image';

interface Props {
  buttonText: string;
  isOpen: boolean;
  closePopup: () => void;
  clickEvent: () => void;
  children: React.ReactNode;
}
/**
 * @param {String} buttonText - 오른쪽 버튼에 들어갈 텍스트.
 * @param {Boolean} isOpen - 모달이 열려있는 상태를 알려주는 값.
 * @param {Function} closePopup - 모달을 닫는 함수.
 * @param {Function} clickEvent - 오른쪽 버튼을 클릭시 일어날 함수.
 */
const BasePopupTwoBtns = ({
  buttonText,
  isOpen,
  closePopup,
  clickEvent,
  children,
}: Props) => {
  //팝업 끄기
  const handleClosePopup = () => {
    closePopup();
  };

  //팝업 안쪽 클릭시 팝업이 꺼지는 현상을 없애기위해 버블링 막음
  const handleStopBubbling = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  //위에서 넘겨받은 클릭이벤트
  const handleClickEvent = () => {
    clickEvent();
    closePopup();
  };

  return (
    <>
      <Portal>
        {isOpen && (
          <div
            className="fixed z-20 left-0 top-0 w-full h-full bg-black200 bg-opacity-45 flex items-center justify-center"
            onClick={handleClosePopup}
          >
            <div
              onClick={handleStopBubbling}
              className="w-[298px] p-[24px] bg-white rounded-[12px] flex flex-col items-center justify-center"
            >
              <Image
                src="/icons/cancel-reservation.svg"
                alt="체크 버튼"
                width={24}
                height={24}
              />
              <div className="text-black200 text-h4-regular mt-4">
                {children}
              </div>
              <div className={'flex w-full mt-8 justify-center gap-2'}>
                <Button
                  width={80}
                  height={38}
                  fontSize={14}
                  textBold={true}
                  btnColor={'white'}
                  textColor={'nomadBlack'}
                  border={true}
                  borderColor={'nomadBlack'}
                  hover={true}
                  onClick={handleClosePopup}
                >
                  아니오
                </Button>
                <Button
                  width={80}
                  height={38}
                  fontSize={14}
                  textBold={true}
                  btnColor={'nomadBlack'}
                  textColor={'white'}
                  hover={true}
                  onClick={handleClickEvent}
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};

export default BasePopupTwoBtns;