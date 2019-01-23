#### This package offers util function to stop immediate and further propagation for React components to keep an event 'private'. Often useful if event handlers are registered on `document` object diffusedly through an app. [Demo](https://codepen.io/xiaodudu/pen/KGwrzY)

---------

## Usage & Example

``` jsx
import stopReactEventPropagation from 'stop-react-event-propagation'

class Button extends React.Component {
  handleClick = e => {
    stopReactEventPropagation(e)
    / **
      your private logic on this event...
    ** /
  }

  render() {
    return <button onClick={this.handleClick}>
      Clicking events fired from this button will not get noticed by other event listeners.
    </button>
  }
}
```

## License

MIT
