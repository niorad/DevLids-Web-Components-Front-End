import { LitElement, html, css } from '../vendor/LitElement.js';
import './components/lid-search.js';
import './components/lid-list.js';

class App extends LitElement {
	constructor() {
		super();
		this.searchTerm = 'Dev-Lids';
	}

	static get properties() {
		return {
			searchTerm: { type: String }
		};
	}

	onSearchTermChanged(event) {
		this.searchTerm = event.detail;
	}

	render() {
		return html`
			<lid-search
				.term=${this.searchTerm}
				@search-term-changed=${this.onSearchTermChanged}
			></lid-search>
			<lid-list .term=${this.searchTerm}></lid-list>
		`;
	}
}

customElements.define('devlids-app', App);
