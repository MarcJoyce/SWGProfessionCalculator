import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media only screen and (max-width: 968px) {
    flex-direction: column;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: 100%;
  margin: 0 5px;

  @media only screen and (max-width: 968px) {
    order: 1;
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

export const SideContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media only screen and (max-width: 968px) {
    order: 2;
  }
`;

export const Container = styled.div`
    border: 1px solid #36b2bc;
    border-radius: 16px;
    background-color: #00434c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    flex: 1 1 33%;
    overflow: hidden;

    h2 {
        text-align: center;
        margin-bottom: 8px;
        color: white;
        font-size: 1.1rem;
        text-transform: uppercase;
    }
    
    h4 {
        text-align: center;
        margin-bottom: 8px;
        color: white;
        font-size: 0.9rem;

        &.switch {
            cursor: pointer;
            color: #e4f75d;
        }
    }
    
    .innerContainer { 
        width: 100%;
        flex: 1;
        border: 1px solid #36b2bc;
        border-radius: 16px;
        background-color: #008ca7;
        flex-direction: column;
        padding: 8px 0;
        overflow: auto;

        .row {
            display: flex;

            p {
                border: 1px solid #36b2bc;
                border-top: 0px;
                
            }

            p:first-child {
                flex: 7;
            }

            p:last-child {
                flex: 3;
                text-align: right;
            }
        }

        &::-webkit-scrollbar {
            border-radius: 0 16px 16px 0;
            overflow: hidden;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 96, 115, 1);
            border-radius: 0 16px 16px 0;
        }
    }

    button, p {
        display: block;
        color: white;
        text-decoration: none;
        font-size: 0.8rem;
        padding: 2px 8px;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        min-height: 0;
        background: none;
        outline: none;
        border: none;
    }

    button {
        cursor: pointer;
        width: 100%;
        text-align: left;

        &:hover {
            background-color: #00434c
        }
    }

    &.skillTree {
        position: relative;
        min-width: 100%;
        height: 70%;
        background-color: #0089a5;
        gap: 5px;
        color: white;
        font-weight: bold;

        select { 
            position: absolute;
            left: 5px; 
            background: #0089a5;
            border: none;
            color: #ffffff;
            font-weight: bold;
            text-transform: capitalize; 
        }

        .skillPointWarning {
            color: red;
            font-size: 1.2rem;
            background-color: black;
            font-weight: bolder;
            padding: 8px;
            margin: 4px;
        }

        .skillPoints { 
            width: 50%;
            display: flex;
            justify-content: space-between;
            padding: 8px;

            button {
                background-color: rgb(230,0,0);
                padding: 4px;
                font-weight: bolder;
                outline: none;
                border: none;
                border-radius: 0 4px 0 4px;
            }

            
        }

        span {
            font-size: 1rem;
            margin: 0 8px;
        }
    }

    .linkContainer { 
        border-radius: 0;
        border: none;
        width: 100%;
        min-height: 25px;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-evenly;
        
        p {
            cursor: pointer;
            white-space: nowrap;
            
            &:hover {
                background-color: #00434c;
            }
        }
    }

    .skillBranches { 
        width: 100%;
        height: 100%;
        display: flex;
    }

    .skillBranch { 
        display: flex;
        flex: 1;
        flex-direction: column-reverse;
        align-items: flex-end;
        margin: 0 2px;

        .linkContainer { 0
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-bottom: 8px;
            order: 1;
        }
    }

    &.activeSkillModifiers  { 
        position: relative;
        height: 30%;
        width: 50%;
        overflow:hidden;

        h2 {
            width: 100%;
            text-align: left;
        }

        > p {
            white-space: normal;
        }
    }

    &.activeSkillCommands { 
        position: relative;
        height: 30%;
        width: 50%;
        overflow:hidden;

        h2 {
            width: 100%;
            text-align: right;
        }

        p {
            text-align: left !important;
        }
    }
    @media only screen and (max-width: 968px) {

        padding: 2px;
        margin: 0px;

        &.skillTree {
            height: auto;
        }

        .linkContainer {
            min-height: auto;
        }

        .skillBranch { 
            width: 25%;
        }

        a, p {
            font-size: 0.6rem;
        }

        h2 {
            font-size: 0.8rem;
            white-space: nowrap;
        }
        
        &.activeSkillCommands, &.activeSkillModifiers {
            height: auto;
        }
    }
`;

export const SkillBoxContainer = styled.div`
  width: clamp(100px, 100%, 300px);
  height: 50px;
  min-height: 50px;
  padding: 4px;
  margin: 1px 0;
  border-radius: 0 8px 0 8px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? '#00a92e' : '#005f73')};
  border-color: ${(props) => (props.active ? '#00434c' : '#00434c')};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => (props.active ? '#256729' : '#0089a5')};
    border-color: ${(props) => (props.active ? '#65d775' : '#00434c')};
    border: 4px 2px;

    p {
      color: ${(props) => (props.active ? '#e4f75d' : 'white')};
    }
  }

  p {
    border: none;
    text-align: center;
    border: none;
    white-space: normal;
    font-weight: bold;
    line-height: 1rem;
    color: ${(props) => (props.active ? 'black' : 'white')};
  }

  @media only screen and (max-width: 968px) {
    width: 100%;
    padding: 1px;
  }
`;
