"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl w-[300px] md:w-[500px]  max-w-md relative"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
            exit={{ x: 200, opacity: 0, transition: { duration: 1.5 } }}
          >
            <button
              onClick={onClose}
              className="absolute -translate-y-8 translate-x-4 b right-2 text-white bg-red-400 rounded-full px-2 text-center text-[20px]"
            >
              ×
            </button>
            <div className="flex justify-center items-center text-[20px] font-medium text-center">
              This website is just a demo to showcase my animation skills to
              clients
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
