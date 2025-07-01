"use client";

import { motion } from "motion/react";

export function MotionFadeRight({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			className={` ${className}`}
		>
			{children}
		</motion.div>
	);
}
