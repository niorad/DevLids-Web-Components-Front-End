import { render, html } from '../node_modules/lit-html/lit-html.js';

class LidList extends HTMLElement {
	constructor() {
		super();
		this.lidData = [
			{
				name: 'niorad',
				twitter: 'niorad',
				github: 'niorad',
				devto: 'niorad',
				url: 'https://devlids.com/lids/niorad',
				thumb:
					'https://devlids.com/media/pages/lids/niorad/3497672101-1547739003/2018-11-27-09-46-56-420x280-q80.jpg'
			},
			{
				name: 'lerk',
				twitter: 'lerk',
				github: 'lerk',
				devto: 'lerk',
				url: 'https://devlids.com/lids/lerk',
				thumb:
					'https://devlids.com/media/pages/lids/lerk/3365698571-1569499521/img-20190926-135642-630x420-q60.jpg'
			}
		];
		this.root = this.attachShadow({ mode: 'open' });
		render(this.renderTemplate(), this.root);
	}

	renderLidListItems() {
		const lids = this.lidData.map(this.renderLid);
		return html`
			${lids}
		`;
	}

	renderLid({ name, twitter, github, devto, url, thumb }) {
		return html`
			<li>
				<dev-lid
					name="${name}"
					twitter="${twitter}"
					github="${github}"
					devto="${devto}"
					url="${url}"
					thumb="${thumb}"
				>
				</dev-lid>
			</li>
		`;
	}

	renderTemplate() {
		return html`
			<style>
				ul {
					list-style: none outside none;
					margin: 0;
					padding: 0;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-gap: 10px;
				}
			</style>
			<ul>
				${this.renderLidListItems()}
			</ul>
		`;
	}
}

customElements.define('lid-list', LidList);
