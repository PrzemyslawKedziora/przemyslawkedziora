import styled from "styled-components";

export const PersonContainer = styled.div`
  background: ${({theme}) => theme.cardLight};
  display: flex;
  min-height: 95vh;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 0;
`;


export const PersonInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const PersonLeftDataContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const PersonCVButton = styled.button`
    min-width: 15rem;
    height: 4rem;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 25px;
    background: linear-gradient(31deg, ${({theme}) => theme.primary} 0%, #5BAECEFF 47%, ${({theme}) => theme.cardLight} 105%);
    color: #F2F3F4;
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
    
`
export const PersonRightDataContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme}) => theme.textPrimary};
  line-height: 68px;
    
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme}) => theme.textPrimary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({theme}) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({theme}) => theme.grey};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
export const Img = styled.img`
  position: relative;
  width: 60%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.primary};

  @media (max-width: 768px) {
      width: 70%;
      height: 90%;
  }

  @media (max-width: 640px) {
      width: 70%;
      height: 90%;
  }
`;

