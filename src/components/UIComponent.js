
import { h } from 'snabbdom/build/package/h';
import { init } from 'snabbdom/build/package/init';
import { classModule } from 'snabbdom/build/package/modules/class';
import { propsModule } from 'snabbdom/build/package/modules/props';
import { styleModule } from 'snabbdom/build/package/modules/style';
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

function UIComponent({ initialCount }) {
  let state = { count: initialCount || 0 };
  let vnode = null;

  function updateState(newState) {
    state = { ...state, ...newState };
    vnode = patch(vnode, render());
  }

  function render() {
    return h('div', {}, [
      h('h1', {}, state.count),
      h('button', { on: { click: handleClick } }, 'Add')
    ]);
  }

  function handleClick() {
    updateState({ count: state.count + 1 });
    console.log('State changed:', state.count + 1);
  }

  function mount(container) {
    vnode = patch(container, render());
    console.log('Component mounted');
  }

  return { mount };
}

export default UIComponent;
