import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 0.9rem;
    font-weight: bold;
`;

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    width: 15%;
    margin: 0 5px 0 0;
`;

export const BoxContainer = styled.div`
    flex: 3;
    max-height: 33%;
    position: relative;
    border-radius: 8px 0 8px 0;
    border: 1px solid #00455d;
    margin: 5px 0;
    color: white;
    overflow: hidden;
    
    h6 {
        font-size: 1rem;
        margin: 5px;
        color: #00455d;
        font-weight: bold;
    }

    .boxContainer {
        height: 90%;
        overflow-y: auto;
        padding: 5px 0;
    
    
        &::-webkit-scrollbar {
            background-color: #0188a5;
            width: 0.5rem;
        } 

        &::-webkit-scrollbar-thumb {
            background-color: #00455d;
        } 

        &::-webkit-scrollbar-track {
            background: linear-gradient(90deg,
                rgba(1,136,165,1) 0%,
                rgba(1,136,165,1) 35%,
                rgba(0,69,93,1) 35%,
                rgba(0,69,93,1) 7p5%,
                rgba(1,136,165,1) 75%,
                rgba(1,136,165,1) 100%);
        } 

    }

    .indPlayerContainer {
        display: flex;
        justify-content: space-between;
        margin: 2px 5px;

        p {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;

            &:first-child {
                flex: 1
            }


        }
    }

    .professionBoxContainer { 
        max-height: 100%;
        overflow: inherit;
    }
`;

export const ProfessionBoxOptions = styled.div`
width: 100%;
text-align: center;

    div {
        border-radius: 8px 0 8px 0;
        background-color: #00455d;
        cursor: pointer;
        padding: 2px 8px;

        p {
            color: white;
        }

    }
`;

export const ProfsBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 8px;
    height: 100%;
    width: 100%;
    margin: 5px 0;
    overflow:hidden;
    scroll: normal;

    p {
        color: white;
        cursor: pointer;
    }
`;

export const AllProfContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 8px;
    height: 100%;
    width: 100%;
    margin: 5px 0;
    overflow: auto;
    height: fit-content;

    p {
        color: white;
        cursor: pointer;
        margin: 2px 0 0 0;

        &:hover {
            background-color: #00455d;
        }
    }

    hr {
        margin: 10px 0;
    }
`;

export const PlayerModContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    width: 15%;
`;

export const ProfessionContainer = styled.div`
    position: relative;
    height: 100%;
    width: 70%;
    flex: 8;
    display: flex;
    flex-direction: column;
    border-radius: 8px 0 8px 0;
    border: 1px solid #00455d;
    padding: 10px;
`;

export const SkillTree = styled.div`
    position: relative;  
    height: 100%;
    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:before {
        content: "";
        position: absolute;
        width: 76%;
        height: 76%;
        border: 1px solid #30cbdd;
        z-index: -1;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 70%;
        background-color: #0188a5;
        z-index: -1;
    }
`;

export const PlayerMods = styled.div`
    position: relative;  
    height: 20%;
    flex: 2;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 5px;
    
    div {
        height: 100%;
        max-height: 100%;
        
        .indPlayerContainer { 
            height: fit-content;
        }
    }

`;

export const MasterLink = styled.div`
    width: 100%;
    flex: 1;
    justify-content: space-evenly !important;

    p {
        margin-top: 5px;
        cursor: pointer;
        color: white;
        white-space: nowrap;

        &:hover {
            color: black;
        }
    }
`;
export const Master = styled.div`
    flex: 3;
`;
export const BranchContainer = styled.div`
    flex: 13;
    width: 100%;
    height: 100%;
    gap: 5px;
`;

export const Branch = styled.div`
    flex-direction: column;
    width: 25%;
    height: 100%;
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BranchSkillBoxContainer = styled.div`
    flex-direction: column-reverse;
    flex: 4;
    width: 100%;
`;

export const BranchLink = styled.div`
    flex-direction: column;
    flex: 1;
    max-height: 150px;

    p {
        margin-top: 5px;
        cursor: pointer;
        color: white;
        white-space: nowrap;

        &:hover {
            color: black;
        }
    }
`;

export const BranchBoxContainer = styled.div`    
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    height: 50px;
    max-height: 50px;
    border-radius: 8px 0 8px 0;
    border: 2px solid lightblue;
    margin: 2px 0;
    border-color: ${props => props.active ? '#00633d' : '#00455d'};
    background-color: ${props => props.active ? '#00aa2f' : '#016074'};
    cursor: pointer;
    text-align: center;

    display: flex;
    flex-direction: column;

    p { 
        color: ${props => props.active ? 'black' : 'white'};
        font-size: 0.8rem;
    }

    &:hover {
        background-color: ${props => props.active ? '#00633d' : '#00455d'};
        border-color: ${props => props.active ? '#00455d' : '#016074'};

        p {
            color: ${props => props.active ? '#e4f470' : 'white'};
        }
    }
`;

export const Novice = styled.div`
    flex: 3;
`;
export const NoviceLink = styled.div`
    width: 100%;
    flex: 1;
    justify-content: space-evenly !important;

    p {
        margin-top: 5px;
        cursor: pointer;
        color: white;
        white-space: nowrap;

        &:hover {
            color: black;
        }
    }
`;

export const SkillPointBoxContainer = styled.div`
    width: 100%;
    background-color: red;
`;