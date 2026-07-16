import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background-color: #020617;

  &::before {
    content: '';
    position: fixed;
    inset: -15%;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(
        circle at 22% 30%,
        rgba(56, 189, 248, 0.25),
        transparent 58%
      ),
      radial-gradient(circle at 78% 80%, rgba(59, 130, 246, 0.18), transparent 60%);
    mix-blend-mode: screen;
    opacity: 0.5;
    filter: blur(16px);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;

  @media only screen and (max-width: 968px) {
    flex-direction: column;
    overflow-y: auto;
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
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 18px;
    background: rgba(9, 13, 34, 0.96);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    flex: 1 1 33%;
    overflow: hidden;

    h2 {
        text-align: center;
        margin-bottom: 8px;
        color: #e5e7eb;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    h4 {
        text-align: center;
        margin-bottom: 8px;
        color: #e5e7eb;
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;

        &.switch {
            cursor: pointer;
            color: #facc15;
        }
    }

    .innerContainer {
        width: 100%;
        flex: 1;
        border: 1px solid rgba(148, 163, 184, 0.5);
        border-radius: 14px;
        background: linear-gradient(145deg, #020617, #030712);
        flex-direction: column;
        padding: 8px 0;
        overflow: auto;

        .row {
            display: flex;

            p {
                border: 1px solid rgba(148, 163, 184, 0.3);
                border-top: 0px;

            }

            p:first-child {
                flex: 7;
            }

            p:last-child {
                flex: 3;
                text-align: right;
                color: #9ca3af;
            }
        }

        &::-webkit-scrollbar {
            border-radius: 0 14px 14px 0;
            overflow: hidden;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(96, 165, 250, 0.5);
            border-radius: 0 14px 14px 0;
        }
    }

    button, p {
        display: block;
        color: #f5f5f5;
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
            background-color: rgba(59, 130, 246, 0.18);
        }
    }

    &.skillTree {
        position: relative;
        min-width: 100%;
        height: 70%;
        gap: 5px;
        color: #f5f5f5;
        font-weight: bold;

        select {
            position: absolute;
            left: 5px;
            top: 5px;
            background: rgba(15, 23, 42, 0.9);
            border: 1px solid rgba(148, 163, 184, 0.5);
            border-radius: 999px;
            padding: 3px 10px;
            color: #f5f5f5;
            font-weight: bold;
            text-transform: capitalize;
        }

        .skillPointWarning {
            color: #fecaca;
            font-size: 1.2rem;
            background: rgba(220, 38, 38, 0.18);
            border: 1px solid rgba(248, 113, 113, 0.6);
            border-radius: 8px;
            font-weight: bolder;
            padding: 8px;
            margin: 4px;
        }

        .skillPoints {
            width: 50%;
            display: flex;
            justify-content: space-between;
            padding: 8px;
            align-items: center;

            button {
                background: radial-gradient(
                    circle at 20% 0%,
                    rgba(248, 113, 113, 0.45),
                    rgba(15, 23, 42, 0.92)
                );
                border: 1px solid rgba(248, 113, 113, 0.7);
                color: #fee2e2;
                padding: 6px 16px;
                font-weight: bolder;
                outline: none;
                border-radius: 999px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);

                &:hover {
                    box-shadow: 0 14px 32px rgba(248, 113, 113, 0.35);
                }
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
            color: #60a5fa;

            &:hover {
                background-color: rgba(59, 130, 246, 0.18);
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

        .linkContainer {
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
  border-radius: 0 12px 0 12px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.active
      ? 'linear-gradient(145deg, #16a34a, #15803d)'
      : 'linear-gradient(145deg, #0f172a, #1e293b)'};
  border-color: ${(props) => (props.active ? 'rgba(34, 197, 94, 0.9)' : 'rgba(148, 163, 184, 0.5)')};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: ${(props) =>
      props.active
        ? 'linear-gradient(145deg, #22c55e, #16a34a)'
        : 'linear-gradient(145deg, #1e293b, #334155)'};
    border-color: ${(props) => (props.active ? '#4ade80' : 'rgba(96, 165, 250, 0.8)')};
    box-shadow: 0 10px 24px ${(props) => (props.active ? 'rgba(34, 197, 94, 0.35)' : 'rgba(59, 130, 246, 0.3)')};

    p {
      color: ${(props) => (props.active ? '#f0fdf4' : '#facc15')};
    }
  }

  p {
    border: none;
    text-align: center;
    white-space: normal;
    font-weight: bold;
    line-height: 1rem;
    color: ${(props) => (props.active ? '#f0fdf4' : '#f5f5f5')};
  }

  @media only screen and (max-width: 968px) {
    width: 100%;
    padding: 1px;
  }
`;
