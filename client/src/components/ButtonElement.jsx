import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ff5f1f' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#ff5f1f')};
  }
`;

export const Button2 = styled.div`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#ff5f1f' : '#111')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#eee')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#eee' : '#ff5f1f')};
  }
`;

export const Button3 = styled.div`
  border-radius: 15px;
  width: 80px;
  height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  background: ${({ primary }) => (primary ? '#ff5f1f' : '#0437f2')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#eee')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#f28500' : '#007FFF')};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 60px;
    height: 20px;
  }

  @media screen and (max-height: 650px) {
    font-size: 14px;
    width: 60px;
    height: 20px;
  }
`;
