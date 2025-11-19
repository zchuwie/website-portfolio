import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const directionVariants = {
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
}

export default function ScrollReveal({ children, direction, duration = 0.6, delay = 0, once = false, className }: { children: React.ReactNode; direction: 'left' | 'right' | 'up' | 'down'; duration?: number; delay?: number; once?: boolean;  className?: string }) {
    const [ref, inView] = useInView({ triggerOnce: once });

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={directionVariants[direction] || directionVariants.up}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: duration, delay: delay }}
        >
            {children}
        </motion.div>
    )
}
