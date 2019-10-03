import { LitElement, html, css } from '../vendor/LitElement.js';

class LidSearch extends LitElement {
	static get properties() {
		return {
			term: { type: String }
		};
	}

	onInput(event) {
		this.dispatchEvent(
			new CustomEvent('search-term-changed', {
				detail: event.currentTarget.value
			})
		);
	}

	static get styles() {
		return css`
			div {
				display: flex;
				justify-content: center;
				padding: 1rem;
			}
			input {
				font-size: 20px;
				border: none;
				border-radius: 3px;
				padding: 6px 10px;
			}
		`;
	}

	render() {
		return html`
			<div>
				<input
					type="text"
					@input=${this.onInput}
					value=${this.term}
					placeholder="Search…"
				/>
			</div>
		`;
	}
}

customElements.define('lid-search', LidSearch);
