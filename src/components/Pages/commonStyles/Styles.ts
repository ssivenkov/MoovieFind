import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledSection = styled.div`
  width: var(--content-width);
`;

export const StyledSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    & {
      justify-content: center;
    }
  }
`;

export const StyledSectionTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledSectionTitle = styled.div`
  margin: 20px 0 25px 0;
  font-size: 35px;
  font-weight: 500;
  padding: 0 10px 8px 10px;
  border-bottom: 5px solid var(--primary);
`;

export const StyledSectionContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type StyledFieldPropsType = {
  marginBottom?: boolean;
  marginRight?: boolean;
};

export const StyledField = styled(Field)<StyledFieldPropsType>`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  padding: 7px 15px;
  border-radius: 7px;
  ${props => (props.marginBottom ? 'margin-bottom: 15px' : '')};
  ${props => (props.marginRight ? 'margin-right: 20px' : '')};
`;

export const StyledFormRow = styled(Form)`
  width: 100%;
  display: flex;
`;

export const StyledFormColumn = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
