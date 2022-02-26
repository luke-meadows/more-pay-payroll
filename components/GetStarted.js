import Image from 'next/image';
import styled from 'styled-components';
import YourWay from '../public/imgs/your-way.jpg';
import Consultant from '../public/imgs/consultant.jpg';
import Numbers from '../public/imgs/numbers.jpg';
import WorkWherever from '../public/imgs/work-wherever.jpg';
import { motion } from 'framer-motion';
import { containerVariant, elementVariant } from '../lib/animations';
import useScroll from '../lib/useScroll';
export default function GetStarted() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();

  return (
    <AltImageSection>
      <motion.div
        variants={containerVariant}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h3 variants={elementVariant}>
          Get started with your bookkeeping & accounting!
        </motion.h3>
        <motion.p variants={elementVariant}>
          Being a customer of Your Pay is easy - we take care of your accounting
          online and completely digitally!
        </motion.p>
      </motion.div>
      <AltCardContainer>
        <motion.div
          variants={containerVariant}
          ref={element2}
          animate={controls2}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <ImageContainer>
              <Image src={YourWay} layout="responsive" objectFit="cover" />
            </ImageContainer>
            <Text>
              <p>01.</p>
              <h4>You work your way</h4>
              <p>
                Being a customer of Your Pay is easy - we take care of your
                accounting digitally and at a really low price. You run your
                business as you wish, and we fix suitable systems based on your
                conditions. If you want to create your invoices directly in our
                systems, it goes great, and you would rather continue to make
                them e.g. as pdfs, it also works well. Depending on the
                company's size, you can also choose not to receive mail or let
                us handle payments on the company's supplier invoices. Whatever
                you choose to do, you then send in all the material easily with
                our app in your mobile, and then we do the rest. It could not be
                easier!
              </p>
            </Text>
          </AltCard>
        </motion.div>
        <motion.div
          variants={containerVariant}
          ref={element3}
          animate={controls3}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <Text>
              <p>02.</p>
              <h4>Has your own accounting consultant</h4>
              <p>
                At Your Pay, you always have a dedicated accounting consultant
                who has full control of your company. Your accounting consultant
                is your sounding board for the company's financial issues, and
                despite the fact that we are completely digital in the
                management of your company's finances, we are extremely personal
                when it comes to our relationship with you as a customer. You
                should always feel that you can contact your accounting
                consultant and get answers to all those questions that arise, at
                no extra cost. We are available both by email, phone or over a
                coffee. We simply think this is how it should work at a really
                good accounting firm.
              </p>
            </Text>
            <ImageContainer>
              <Image src={Consultant} layout="responsive" objectFit="cover" />
            </ImageContainer>
          </AltCard>
        </motion.div>
        <motion.div
          variants={containerVariant}
          ref={element4}
          animate={controls4}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <ImageContainer>
              <Image src={Numbers} layout="responsive" objectFit="cover" />
            </ImageContainer>
            <Text>
              <p>03.</p>
              <h4>Get a close look at the numbers</h4>
              <p>
                As a customer of Your Pay, you receive a nice and
                easy-to-understand report every month with all the necessary
                information about your company's financial status; income
                statement, balance sheet, accounts receivable and accounts
                payable and a summary of the company's current debt to the
                Swedish Tax Agency. In addition, your accounting consultant
                always gives you a comment on the most important conclusions
                that the figures in the period report tell you about. Here, too,
                we believe in flexibility, because if you are not interested,
                you do not actually need to know everything, we clearly state
                what we have declared for you (because of course we take care of
                it), and how much is to be paid in taxes and VAT.
              </p>
            </Text>
          </AltCard>
        </motion.div>
        <motion.div
          variants={containerVariant}
          ref={element5}
          animate={controls5}
          initial="hidden"
        >
          <AltCard variants={elementVariant}>
            <Text>
              <p>04.</p>
              <h4>And work wherever you want</h4>
              <p>
                Since we are completely digital, it does not matter if your
                company is located in Stockholm, Gothenburg, Kiruna or Malmö -
                everyone can take advantage of our smart accounting service. We
                have customers all over Sweden and many of our customers also
                have the whole world as their market, you always have us at
                arm's length through our app or by email. So do not hesitate to
                contact us, we also have offices in both Stockholm and
                Gothenburg where you are always welcome to drop by for a cup of
                coffee.
              </p>
            </Text>
            <ImageContainer>
              <Image src={WorkWherever} layout="responsive" objectFit="cover" />
            </ImageContainer>
          </AltCard>
        </motion.div>
      </AltCardContainer>
    </AltImageSection>
  );
}

export const AltImageSection = styled(motion.section)`
  text-align: center;
  padding: 0rem var(--container-horizontal-padding) 10rem
    var(--container-horizontal-padding);
`;

export const AltCardContainer = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 10rem;
`;
export const AltCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  width: 46%;
  img {
    border-radius: 0.3rem;
  }
`;
const Text = styled.div`
  width: 46%;
  text-align: left;
  * {
    margin: 1rem;
  }
`;
