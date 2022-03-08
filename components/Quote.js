import styled from 'styled-components';
import useForm from '../lib/useForm';
import { Button } from './Header';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';

export default function Quote({ size }) {
  const [element, controls] = useScroll();
  const initial = {
    salaries: 3,
    receipts: 50,
    invoices: 20,
  };
  const { inputs, handleChange } = useForm(initial);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <StyledEstimate
      variants={containerVariant}
      ref={element}
      animate={controls}
      initial="hidden"
      size={size}
    >
      <motion.h3 variants={elementVariant}>Get a price estimate</motion.h3>
      {size === 'large' && (
        <>
          <motion.h4 variants={elementVariant}>
            Does that sound incredible? Test us
          </motion.h4>
          <motion.p variants={elementVariant}>
            Each company is unique but some things are common to most companies.
            Therefore, we can give a good price estimate for what our services
            would cost your company if you fill in the information below. We
            will return with a price within 24 hours, and we promise you will
            like it!
          </motion.p>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <SliderContainer variants={elementVariant} size={size}>
          <div>
            <RangeSlider size={size}>
              <div>{inputs.salaries}</div>
              <input
                name="salaries"
                type="range"
                onChange={handleChange}
                value={inputs.salaries}
                min={0}
                max={99}
              />
            </RangeSlider>
            <label htmlFor="salaries">Number of salaries per month</label>
          </div>
          <div>
            <RangeSlider size={size}>
              <div>{inputs.invoices}</div>
              <input
                name="invoices"
                type="range"
                onChange={handleChange}
                value={inputs.invoices}
                min={0}
                max={99}
              />
            </RangeSlider>
            <label htmlFor="invoices">
              Number of customer / supplier invoices per month
            </label>
          </div>
          <div>
            <RangeSlider size={size}>
              <div>{inputs.receipts}</div>
              <input
                name="receipts"
                type="range"
                onChange={handleChange}
                value={inputs.receipts}
                min={0}
                max={99}
              />
            </RangeSlider>
            <label htmlFor="receipts">Number of receipts per month</label>
          </div>
        </SliderContainer>

        <StyledButton type="submit" variants={elementVariant} size={size}>
          Get an estimate
        </StyledButton>
      </form>
    </StyledEstimate>
  );
}

const StyledEstimate = styled(motion.div)`
  border-radius: 1rem;
  position: ${(props) => (props.size === 'large' ? 'initial' : 'absolute')};
  right: var(--container-horizontal-padding);
  top: -15rem;
  width: ${(props) => (props.size === 'large' ? '100%' : '40rem')};
  background: white;
  padding: ${(props) =>
    props.size === 'large'
      ? '2rem var(--container-horizontal-padding) 8rem var(--container-horizontal-padding)'
      : '2rem 4rem 4rem 4rem'};
  box-shadow: ${(props) => (props.size === 'large' ? 'none' : 'var(--bs)')};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.size === 'large' ? 'center' : 'none')};
  h3 {
    font-size: ${(props) => (props.size === 'large' ? '3rem' : '2.5rem')};
    text-align: ${(props) => (props.size === 'large' ? 'center' : 'left')};
    margin-bottom: ${(props) => (props.size === 'large' ? '0' : '2rem')};
  }
  h4 {
    font-size: 1.8rem;
    font-weight: 100;
  }
  p {
    max-width: 100ch;
    text-align: center;
    margin: 0rem 0 4rem 0;
    line-height: 1.5;
  }
  label {
    display: block;
    margin: 0rem 0 3rem 4.8rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.size === 'large' ? 'center' : 'none')};
  }
`;
const SliderContainer = styled(motion.div)`
  display: ${(props) => (props.size === 'large' ? 'grid' : 'initial')};
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5rem;
  width: 100%;
  padding: ${(props) => (props.size === 'large' ? '0 5rem 0 10rem' : '0')};
`;
export const RangeSlider = styled.div`
  display: flex;
  align-items: center;
  div {
    min-width: 3rem;
    font-size: 2.2rem;
    margin-right: 1rem;
    text-align: left;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type='range'] {
      overflow: hidden;
      width: ${(props) => (props.size === 'large' ? '40rem' : '100%')};

      -webkit-appearance: none;
      background-color: rgba(0, 0, 0, 0.3);
    }

    input[type='range']::-webkit-slider-runnable-track {
      height: 20px;
      -webkit-appearance: none;
      /* color: #13bba4; */
      margin-top: -1px;
    }

    input[type='range']::-webkit-slider-thumb {
      width: 20px;
      -webkit-appearance: none;
      height: 20px;
      cursor: pointer;
      background: var(--medium-green);
      box-shadow: -40rem 0 0 40rem var(--green);
    }
  }
  /** FF*/
  input[type='range']::-moz-range-progress {
    background-color: var(--green);
  }
  input[type='range']::-moz-range-track {
    background: var(--medium-green);
  }
  /* IE*/
  input[type='range']::-ms-fill-lower {
    background-color: var(--green);
  }
  input[type='range']::-ms-fill-upper {
    background-color: var(--medium-green);
  }
`;

const StyledButton = styled(Button)`
  width: ${(props) => (props.size === 'large' ? '' : '100%')};
  text-align: center;
`;
