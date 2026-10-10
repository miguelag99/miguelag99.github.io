// Entrance animation (fade-in-up in global.css) with a staggered delay from tailwind-animations.
// The delay classes are written out in full so Tailwind finds them when scanning the sources
const DELAYS = [
    'animate-delay-0',
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
];

// Steps past the last delay share it, so long lists never keep the reader waiting
export const enter = (step = 0) => `animate-fade-in-up ${DELAYS[Math.min(step, DELAYS.length - 1)]}`;

// Hands out consecutive steps to the elements of a page in template order
export const createStagger = () => {
    let step = 0;
    return () => enter(step++);
};
