import styled from 'styled-components';
import useForm from '../lib/useForm';
import { Button } from './Header';

export default function Quote({ size }) {
  const initial = { salaries: 3, receipts: 5, invoices: 10 };
  const { inputs, handleChange } = useForm({ initial });
  return (
    <StyledEstimate size={size}>
      <h3>Get a price estimate</h3>
      <SliderContainer size={size}>
        <div>
          <RangeSlider>
            <div>{inputs.salaries}</div>
            <input
              name="salaries"
              type="range"
              onChange={handleChange}
              value={inputs.salaries}
              min={0}
              max={100}
            />
          </RangeSlider>
          <label htmlFor="salaries">Number of salaries per month</label>
        </div>
        <div>
          <RangeSlider>
            <div>{inputs.invoices}</div>
            <input
              name="invoices"
              type="range"
              onChange={handleChange}
              value={inputs.invoices}
              min={0}
              max={100}
            />
          </RangeSlider>
          <label htmlFor="invoices">
            Number of customer / supplier invoices per month
          </label>
        </div>
        <div>
          <RangeSlider>
            <div>{inputs.receipts}</div>
            <input
              name="receipts"
              type="range"
              onChange={handleChange}
              value={inputs.receipts}
              min={0}
              max={100}
            />
          </RangeSlider>
          <label htmlFor="receipts">Number of receipts per month</label>
        </div>
      </SliderContainer>

      <StyledButton size={size}>Get an estimate</StyledButton>
    </StyledEstimate>
  );
}

const StyledEstimate = styled.div`
  border-radius: 1rem;
  position: ${(props) => (props.size === 'large' ? 'initial' : 'absolute')};
  right: 10rem;
  top: -10rem;
  width: ${(props) => (props.size === 'large' ? '100%' : '40rem')};
  background: white;
  padding: 2rem 5rem 4rem 5rem;
  box-shadow: ${(props) => (props.size === 'large' ? 'none' : 'var(--bs)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2.5rem;
    text-align: ${(props) => (props.size === 'large' ? 'center' : 'left')};
    margin-bottom: ${(props) => (props.size === 'large' ? '8rem' : '1rem')};
  }
  label {
    display: block;
    margin: 0rem 0 3rem 4.8rem;
  }
`;
const SliderContainer = styled.div`
  display: ${(props) => (props.size === 'large' ? 'grid' : 'initial')};
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5rem;
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
      width: 40rem;
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
