import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    font-weight: 200;
    color: #4F555B;  
    background-color: #FFF;
    padding: 8px; 
    border-radius: 5px; 
    box-shadow: 8px 5px 5px #798591;
    
    &:not(:last-child) {
            margin-right: 20px;
        }    
`;