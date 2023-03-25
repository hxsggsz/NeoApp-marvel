import { StyledNotification } from "."
import { motion } from "framer-motion"
export const Notification = (props: { text: string, error?: boolean }) => {
  return (
    <StyledNotification error={props.error!}>
        <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 50, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className="notification">
          <h1>{props.text}</h1>
        </motion.div>
    </StyledNotification>
  )
}