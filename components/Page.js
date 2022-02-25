import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition } from '../lib/animations';

export default function Page({ children }) {
  return (
    <StyledPage>
      <PageTransitioner
        variants={pageTransition}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      />
      <motion className="div">{children}</motion>
    </StyledPage>
  );
}

const StyledPage = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  margin-top: 9rem;
`;

const PageTransitioner = styled(motion.div)`
  background: var(--blue);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
