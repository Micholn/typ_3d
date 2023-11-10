export interface StaggerContainerVariants extends Variants {
  show: {
    staggerChildren: number;
    delayChildren: number;
  };
}

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): StaggerContainerVariants => ({
  show: {
    staggerChildren,
    delayChildren,
  },
});