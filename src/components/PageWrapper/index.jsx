import React from 'react'

import styled, { css } from 'styled-components';

const StyledPageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    background: #edeeee;
    ${props => props.centered && css`
        justify-content: center;
        align-items: center;
    `}
`;

function PageWrapper({ children, centered = false }) {
    return (
        <StyledPageWrapper centered={centered}>
            {children}
        </StyledPageWrapper>
    )
}

export default PageWrapper;
