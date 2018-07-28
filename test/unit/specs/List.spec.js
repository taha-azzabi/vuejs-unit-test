import Vue from 'vue';
import List from '@/components/List';

// 1. `describe()` is merely for grouping, which you can nest as deep - test suite
// 2. `it()` is a test case

// this is a test suites with single test case
describe('List.vue', () => {
  it('displays items from the list', () => {
    // build component
    //Extend Vue
    const Constructor = Vue.extend(List);
    //Render HTML in memory(the HTML gets built and the variables in our template)
    const ListComponent = new Constructor().$mount();
    // assert that component text contains items from the list
    expect(ListComponent.$el.textContent).to.contain('play games');
  });

  it('adds a new item to list on click', () => {
    // build component
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();
    //set input value
    ListComponent.newItem = 'Learn Testing VueJs With Mocha and Karma'

    // find button
    const button = ListComponent.$el.querySelector('button');
    // simulate click event
    const clickEvent = new window.Event('click');
    /*
    * pass the button a new event object to dispatch
    * par exemple un lien avec un click event , pour lancer ce événement d'une manière automatique
    * cal elem.dispatchEvent(event)
    * <button id="elem" onclick="alert('Click!');">Autoclick</button>
        <script>
          let event = new Event("click");
          elem.dispatchEvent(event);
        </script>
    * */ 
    button.dispatchEvent(clickEvent);
    //run a watcher why ??
    ListComponent._watcher.run();
    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('Learn Testing VueJs With Mocha and Karma');
    expect(ListComponent.listItems).to.contain('Learn Testing VueJs With Mocha and Karma');
  });

  it('Delete and item from list', () => {
    // build component
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();
    // Item to be deleted
    const toDo = 'buy food'
    expect(ListComponent.listItems).to.contain(toDo);
    //find the todo in list
    const indexTodo = ListComponent.listItems.indexOf(toDo)
    // simulate a click
    const button = ListComponent.$el.querySelector('.delete-item'+ indexTodo);
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    ListComponent._watcher.run();
    //assert list not contains the deleted item
    expect(ListComponent.$el.textContent).to.not.contain(toDo);
    expect(ListComponent.listItems).to.not.contain(toDo);
  })
});
