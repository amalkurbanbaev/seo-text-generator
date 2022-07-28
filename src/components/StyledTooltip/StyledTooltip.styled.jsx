import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const TooltipContainer = styled(Button)`
    position: relative;
    height: fit-content;

    :not(:last-child) {
        margin-right: 20px;
    }
`;

export const TooltipText = styled.div`
    position: absolute;
    min-height: 100px;
    display: flex;
    align-items: flex-end;
    top: -120px;
    left: 0;
    background: white;
    color: black;
    padding: 15px 20px;
    border-radius: 12px;
`;
