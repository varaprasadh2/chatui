import React from 'react';

import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.vertical ? 'column': 'row'};
`;

