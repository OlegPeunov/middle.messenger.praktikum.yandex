import { nanoid } from 'nanoid';
// eslint-disable-next-line
import { EventBus } from './EventBus';

// Нельзя создавать экземпляр данного класса
// eslint-disable-next-line
export class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  // eslint-disable-next-line
  public children: Record<string, Block>;

  private eventBus: () => EventBus;

  public id = nanoid(6);
  protected props: P;

  private _element: HTMLElement | null = null;

  private _meta: { tagName: string; props: P; };

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  // eslint-disable-next-line
  constructor(tagName = 'div', propsWithChildren: P) {
    const eventBus = new EventBus();
    // eslint-disable-next-line
    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    // eslint-disable-next-line
    this._meta = {
      tagName,
      props: props as P,
    };

    this.children = children;
    // eslint-disable-next-line
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    // eslint-disable-next-line
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  // eslint-disable-next-line
  _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block >} {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block > = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  // eslint-disable-next-line
  _addEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach((eventName) => {
      // eslint-disable-next-line
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as P & { events: Record<string, () => void> };

    Object.keys(events).forEach((eventName) => {
      // eslint-disable-next-line
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  // eslint-disable-next-line
  _registerEvents(eventBus: EventBus) {
    // eslint-disable-next-line
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    // eslint-disable-next-line
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    // eslint-disable-next-line
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    // eslint-disable-next-line
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // eslint-disable-next-line
  _createResources() {
    // eslint-disable-next-line
    const { tagName } = this._meta;
    // eslint-disable-next-line
    this._element = this._createDocumentElement(tagName);
  }

  // eslint-disable-next-line
  private _init() {
    // eslint-disable-next-line
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  // eslint-disable-next-line
  protected init() {}

  // eslint-disable-next-line
  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(ch => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }
  // eslint-disable-next-line
  async _componentDidUpdate(oldProps: P, newProps: P) {
    // eslint-disable-next-line
    if (await this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line
  async componentDidUpdate(oldProps: P, newProps: P): Promise<boolean> {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    // eslint-disable-next-line
    return this._element;
  }

  // eslint-disable-next-line
  private _render() {
    const fragment = this.render();
    // eslint-disable-next-line
    this._removeEvents();
    // eslint-disable-next-line
    this._element!.innerHTML = '';

    // eslint-disable-next-line
    this._element!.append(fragment);

    // eslint-disable-next-line
    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };
    
    Object.entries(this.children).forEach(([name, component]) => {
      
      contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    });

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    // eslint-disable-next-line
    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }
  // eslint-disable-next-line
  protected render(): DocumentFragment {
    // eslint-disable-next-line
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }
  // eslint-disable-next-line
  _makePropsProxy(props: P) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };
        // eslint-disable-next-line
        target[prop as keyof P] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }
  // eslint-disable-next-line
  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  public get(){};

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
