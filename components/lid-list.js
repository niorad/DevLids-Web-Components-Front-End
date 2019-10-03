import { LitElement, html, css } from '../vendor/LitElement.js';
import './dev-lid.js';

class LidList extends LitElement {
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
				name: 'boris',
				twitter: 'lerk',
				github: 'lerk',
				devto: 'lerk',
				url: 'https://devlids.com/lids/lerk',
				thumb:
					'https://devlids.com/media/pages/lids/lerk/3365698571-1569499521/img-20190926-135642-630x420-q60.jpg'
			},
			{
				name: 'marlon',
				twitter: 'l3rl4n',
				github: 'l3rl4n',
				devto: 'l3rl4n',
				url: 'https://devlids.com/lids/l3rl4n',
				thumb:
					'https://devlids.com/media/pages/lids/l3rl4n/3710080898-1563286045/l3rl4n-630x420-q60.jpg'
			}
		];
	}
	static get properties() {
		return {
			term: { type: String }
		};
	}

	static get styles() {
		return css`
			ul {
				list-style: none outside none;
				margin: 0;
				padding: 0;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-gap: 10px;
			}
		`;
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
					.name="${name}"
					.githubName="${twitter}"
					.twitterName="${github}"
					.devtoName="${devto}"
					.url="${url}"
					.thumb="${thumb}"
				>
				</dev-lid>
			</li>
		`;
	}

	render() {
		return html`
			<ul>
				${this.renderLidListItems()}
			</ul>
			<small>${this.term}</small>
		`;
	}
}

customElements.define('lid-list', LidList);
