export default function stopReactEventPropagation (e) {
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation()
}
