import { ReactNode } from 'react';
import { StyledNotification } from '.';
import { AnimatePresence } from 'framer-motion';
export const Notification = (props: { children: ReactNode, isShow: boolean }) => {
  return (
    <>
      <AnimatePresence>
        {props.isShow && (
          <StyledNotification initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}>
            <div className="notification">
              {props.children}
            </div>
          </StyledNotification>
        )}
      </AnimatePresence>
    </>
  )
}