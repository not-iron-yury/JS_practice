// исходный компонент
class BaseComponent {
  constructor(content) {
    this.element = document.createElement('div');
    this.element.innerHTML = content;
    document.body.append(this.element);
  }

  destroy() {
    this.element.remove();
  }
}

// миксин 1
function WithLogging(Base) {
  return class extends Base {
    show() {
      console.log('[LOG] Показан компонент');
      super.show?.();
    }
  };
}

// миксин 2
function WithAutoClose(Base) {
  return class extends Base {
    show() {
      super.show?.();
      setTimeout(() => this.destroy(), 3000);
    }
  };
}

// миксин 3
function WithFadeAnimation(Base) {
  return class extends Base {
    show() {
      this.element.style.opacity = '0';
      this.element.style.transition = 'opacity 0.5s';
      requestAnimationFrame(() => {
        this.element.style.opacity = '1';
      });
      super.show?.();
    }
    destroy() {
      this.element.style.opacity = '0';
      setTimeout(() => super.destroy(), 500);
    }
  };
}

// новый компонент
class Tooltip extends WithAutoClose(WithLogging(WithFadeAnimation(BaseComponent))) {
  show() {
    this.element.classList.add('tooltip');
    this.element.style.position = 'absolute';
    this.element.style.top = '100px';
    this.element.style.left = '100px';
    super.show();
  }
}
