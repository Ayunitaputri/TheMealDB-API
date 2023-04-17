class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
      }

      get value() {
        return this.querySelector('#searchElement').value;
      }
    
    render() {
        this.innerHTML = `
        <div class="container">
        <div class="search-bar" id="search-bar">
          <input type="text" placeholder="Masukan nama makanan..." id="searchElement">
          <button id="searchButtonElement">Search</button>
        </div>
      </div>`

      this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    };
  }

  customElements.define('search-bar', SearchBar);