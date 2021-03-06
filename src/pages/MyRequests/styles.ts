import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fce4ec;
  width: 100%;
  height: 50px;

  > h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: 600;
    color: #e57373;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 200px;

  > img {
    height: 100px;
    width: 100px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #fff;

  .itens {
    margin: 0 auto;

    > ul {
      display: flex;
      align-items: center;
      list-style: none;

      > li {
        margin: 10px;
        transition: 0.5s;

        &:hover {
          opacity: 0.7;
        }

        > a {
          text-decoration: none;
          color: #e57373;
        }
      }
    }
  }

  div.menu {
    margin: 0 auto;

    > ul {
      display: flex;
      align-items: center;
      list-style: none;

      > li {
        margin: 10px;
        transition: 0.5s;

        &:hover {
          opacity: 0.7;
        }

        > a {
          text-decoration: none;
          color: #e57373;

          > svg {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  background: #fff;
  margin: 0 auto;
  padding: 1em;

  .title {
    h1 {
      color: #e57373;
      padding: 1em;
      margin-left: auto;
      border-bottom: 1px solid #e57373;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 50px auto;

    .content-title {
      background: #e57373;

      > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        > li {
          padding: 10px;
        }
      }
    }

    .content-itens {
      overflow-y: scroll;
      height: 300px;
      > ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        border-bottom: 1px solid #bdbdbd;
        &:hover {
          background: #fce4ec;
        }

        > li {
          padding: 10px;
          > a {
            color: #e57373;
            text-decoration: none;
          }
        }
      }
    }

    @media (max-width: 900px) {
      width: 440px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e57373;
  width: 100%;
  height: 150px;

  div.payment {
    margin: 10px;
    ul {
      list-style: none;

      li {
        display: inline-block;
        padding: 5px;
      }
    }
  }

  .socialNetwork {
    ul {
      list-style: none;

      li {
        display: inline-block;
        padding: 5px;
      }

      a {
        color: #fff;
      }

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }

  .questions {
    margin: 10px;
    ul {
      list-style: none;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
