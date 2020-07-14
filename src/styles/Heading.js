import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  font-size: ${fontSizes.xl};
  margin-right: 10px;

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    position: relative;
    top: -5px;
    margin-left: 20px;
  }
`;

export default Heading;
