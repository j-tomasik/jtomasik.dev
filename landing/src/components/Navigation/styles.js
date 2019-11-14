import styled from 'vue-styled-components'

const StyledNavigation = styled.nav`
  z-index: 999;
  display: flex;
  position: fixed;
  margin-top: -20px;
  color: ${({ theme }) => theme.colors['electric-blue']};
  right: ${({ theme }) => `calc(${theme.header.padding} + 1em)`};

  ul {
    width: 0.5em;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 0.4em;
  }

  a {
    width: 100%;
    display: flex;
    outline: none;
    width: inherit;
    cursor: pointer;
    min-height: 2em;
    position: relative;
    color: currentColor;
    transition-delay: 100ms;
    outline-color: transparent;
    -webkit-tap-highlight-color: transparent;

    &:after {
      content: '';
      width: 100%;
      height: 0.4em;
      position: absolute;
      transform: rotate(45deg);
      background-color: currentColor;
      border: 1px solid currentColor;
      transition: transform 0.2s 100ms;
    }

    &[aria-current='page'] {
      &:after {
        transform: rotate(0) scale(2);
        background: transparent;
      }
    }
  }
`

export default {
  ...StyledNavigation,
  name: 'StyledNavigation',
}