import React from 'react'

import styled, { css } from 'styled-components';


const StyledButtonContainer = styled.div`
    display: flex;
    cursor: ${props => props.loading ? 'not-allowed' : 'pointer'};
    background-color: ${props => props.backgroundColor || '#fff'} !important;
    color: ${props => props.color || '#000'};
    justify-content: center;
    border-radius: 0.2rem;
    padding: 0.75rem 2rem;
    transition: all 300ms ease-ease-in-out;
    width: ${props => props.width || 'auto'};
    :active{
        transform: scale(0.99);
    }
    :hover{
        filter: brightness(0.9);
    }
    ${props => props.borderColor && css`
        border: 1px solid ${props.borderColor};
    `}
`

const StyledButton = styled.button`
    flex: 1;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    background-color: inherit;
    color: ${props => props.color || '#000'} !important;
`;

function Button({ onClick = () => { }, label = "", backgroundColor = '#fff', color = '#000', borderColor = null, loading = false, LoadingComponent = null }) {
    return (
            <StyledButtonContainer
                backgroundColor={backgroundColor}
                color={color}
                borderColor={borderColor}
                onClick={onClick}
                loading={loading}
            >
            {
                    loading ? (
                        LoadingComponent ? <LoadingComponent /> : <span>Please Wait...</span>
                    ) :
                        <StyledButton
                            color={color}
                        >
                            {label}
                        </StyledButton>
            }
           </StyledButtonContainer>
    )
}

export default Button;
