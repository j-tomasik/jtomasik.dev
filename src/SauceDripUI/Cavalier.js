import Vue from 'vue'
import styled from 'vue-styled-components'

const Cavalier = Vue.component('Cavalier', {
  render() {
    return (
      <StyledCavalier data-theme={this.theme} class="cavalier">
        {this.$slots.heading || <h1>{this.heading}</h1>}
        {this.$slots.text || <p>{this.text}</p>}
      </StyledCavalier>
    )
  },

  props: {
    theme: {
      default: 'blue',
      validator: v => ['lime', 'blue'].indexOf(v) !== -1,
    },
    text: { type: [String, Object] },
    heading: { type: [String, Object] },
  },
})

const StyledCavalier = styled.div`
  position: relative;

  &[data-theme='lime'] {
    h1 {
      color: ${props => props.theme.colors.lime};
    }

    p {
      color: #fff;
    }
  }

  h1 {
    margin: 0;
    font-size: 4em;
    max-width: 417px;
    font-weight: 900;
    color: ${props => props.theme.colors['electric-blue']};
  }

  p {
    width: 438px;
    line-height: 1.5;
    font-size: 1.05em;
    color: ${props => props.theme.colors.default};
  }
`
StyledCavalier.name = 'StyledCavalier'

export default Cavalier
