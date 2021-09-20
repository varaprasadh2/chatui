import React from 'react'
import styled from 'styled-components';


const StyledInputContainer = styled.div`
    /* box-sizing: border-box; */
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    flex-direction: column;
`;

const StyledInput = styled.input`
    display: block;
    border: none;
    outline: none;
    flex: 1;
    border: 1px solid gray;
    min-height: 2rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    :focus{
        border: 2px solid ${props => props.borderColor || 'initial'};
    }

`;
const StyledError = styled.div`
 text-transform: capitalize;
 color: tomato;

`
export default function TextInputField({ 
    type = "text", 
    onChange = () => {}, 
    value = "",
    placeholder="",
    backgroundColor = '#fff',
    color = '#000',
    borderColor = '#3db16b',
    error = null
    }) {
    return (
        <StyledInputContainer>
                <StyledInput
                    type={type}
                    value={value}
                    onChange={({ target: { value } }) => onChange(value)}
                    placeholder={placeholder}
                    borderColor={borderColor}
                    backgroundColor={backgroundColor}
                    color={color}
                />
                {
                    error && (
                        <StyledError>{error}</StyledError>
                    )
                }
        </StyledInputContainer>
    )
}

