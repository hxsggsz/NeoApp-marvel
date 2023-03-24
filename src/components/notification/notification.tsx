import { ReactNode } from 'react';
import { StyledNotification } from '.';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../text/text';
export const Notification = (props: { text: string, error?: boolean }) => {
  return (
    <StyledNotification error={props.error!}>
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 50, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className="notification">
          <h1>{props.text}</h1>
        </motion.div>
    </StyledNotification>
  )
}