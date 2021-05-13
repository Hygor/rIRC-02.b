import styled, { css } from 'styled-components';

interface ContainerProps {
  available: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f0f0f5;
  border-radius: 1.6rem;
  display: flex;
  flex-basis: flex-grow;
  flex-direction: column;
  position: relative;

  header {
    background: #181818;
    border-radius: 1.6rem 1.6rem 0px 0px;
    height: 16rem;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;
    display: flex;
    align-items: stretch;
    justify-content: center;

    ${props =>
    !props.available &&
    css`
        opacity: 0.3;
      `};

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;
      margin-top: 16px;
    }

    .desc {
      flex-grow: 1;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  .icon-container {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: all .2s ease-in-out;

    button {
      background: #fff;
      padding: 10px;
      border-radius: 1.6rem;
      display: flex;
      border: none;
      transition: 0.1s;

      svg {
        color: #3d3d4d;
      }

      & + button {
        margin-left: 6px;
      }
    }
  }

  &:hover, &:focus, &:active {
    .icon-container {
      opacity: 1;
      visibility: visible;
    }
  }

  section.footer {
    display: block;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #e4e4eb;
    border-radius: 0px 0px 1.6rem 1.6rem;


    div.availability-container {
      display: flex;
      align-items: center;
      width: 100%;

      p {
        color: #3d3d4d;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 88px;
        height: 32px;
        margin-left: auto;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #c72828;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 20px;
            width: 40px;
            left: 8px;
            bottom: 6px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: #39b100;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(32px);
          -ms-transform: translateX(32px);
          transform: translateX(32px);
        }
      }
    }
  }
`;
