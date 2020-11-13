import styled from 'styled-components'

export const Style = styled.div`
    position: fixed;
    bottom: 0;
    right: 100px;

    display: flex;
    flex-direction: column-reverse; 

    .messsager-tab {
        width: 100px;
        height: 50px;
        background-color: blue;
    }
    .messsager-box {
        height: 500px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
    }
    
`