import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function useScroll(threshold = 0.3) {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold });
  if (view) {
    controls.start('show');
  }
  return [element, controls];
}
