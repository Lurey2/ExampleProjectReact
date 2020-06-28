import React, {
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export const Sidedrawer = forwardRef((props, ref) => {
  const [Sideward, setSideward] = useState(false);

  const closeSideward = () => setSideward(false);

  const showSideward = () => setSideward(true);

  useImperativeHandle(
    ref,
    () => {
      return {
        openSideward: showSideward,
        closeSideward: closeSideward
      };
    },
    []
  );

  const BackSidewar = () =>
    Sideward ? (
      <div
        onClick={closeSideward}
        className="bg-black fixed opacity-75 h-100vh w-100vw z-40 top-0 left-0 "
      ></div>
    ) : null;
  const FrondSidewar = () =>
    Sideward ? (
      <div className="bg-white left-0 top-0 fixed h-100vh max-w-lg w-full  z-45 slice-rigth">
       {
         props.children
       }
      </div>
    ) : null;
  return (
    <div>
      <BackSidewar />
      <FrondSidewar />
    </div>
  );
});
