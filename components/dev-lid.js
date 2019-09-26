import { render, html } from '../node_modules/lit-html/lit-html.js';

class DevLid extends HTMLElement {
	constructor() {
		super();
		this.name = this.getAttribute('name');
		this.thumbUrl = this.getAttribute('thumb');
		this.detailUrl = this.getAttribute('url');
		this.githubName = this.getAttribute('github');
		this.twitterName = this.getAttribute('twitter');
		this.devtoName = this.getAttribute('devto');

		// this.root = this.attachShadow({ mode: 'open' });

		render(this.renderTemplate(), this);
	}

	renderTemplate() {
		return html`
			<style>
				* {
					box-sizing: border-box;
				}
				article {
					color: white;
					box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
					width: 100%;
					padding-bottom: 66%;
					position: relative;
					perspective: 1200px;
					border-radius: 15px;
					font-family: 'IBM Plex Mono', sans-serif;
					border-radius: 15px;
				}
				h1 {
					font-size: 22px;
					font-weight: 500;
					margin: 0 0 7px 0;
					padding: 0 15px;
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 100%;
				}
				.lid-image {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					border-radius: 15px;
				}
				label {
					position: absolute;
					left: 0;
					bottom: 0;
					right: 0;
					top: 0;
					border: 1px solid transparent;
					transform-origin: bottom;
					transition: 0.2s all;
					transform: rotateX(0);
					cursor: pointer;
					perspective: 1200px;
				}
				.cb {
					position: absolute;
					left: -9999px;
				}
				.cb:focus + label,
				label:hover {
					transition: 0.2s all;
					filter: brightness(110%);
				}
				.cb:checked + label {
					transform: rotateX(70deg);
					transition: 0.2s all;
					filter: brightness(160%);
				}
				.cb:checked ~ .content-wrap {
					background-size: 200%;
					transition: 5s all;
				}
				.cb:checked ~ .content-wrap .content {
					opacity: 1;
					transform: translateY(0);
					transition: 0.5s all;
				}
				.content-wrap {
					z-index: -1;
					position: absolute;
					left: 0;
					bottom: 0;
					right: 0;
					top: 0;
					background-image: url(${this.thumbUrl});
					background-color: rgba(0, 0, 0, 0.8);
					background-size: 180%;
					background-position: center;
					background-blend-mode: darken;
					transition: 0.5s all;
					border-radius: 15px;
				}
				.content {
					position: absolute;
					left: 0;
					bottom: 46%;
					right: 0;
					top: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-end;
					transform: translateY(20px);
					opacity: 0;
				}
				.social {
					display: flex;
				}
				a {
					color: white;
					text-decoration: none;
					margin-right: 10px;
				}
			</style>

			<article>
				<input checked type="checkbox" class="cb" id="a" tabindex="0" />
				<label for="a">
					<img class="lid-image" src="${this.thumbUrl}" alt="" />
				</label>
				<div class="content-wrap">
					<div class="content">
						<h1>
							<a href="${this.detailUrl}" data-url>
								${this.name}
							</a>
						</h1>
						<nav class="social">
							<a
								href="https://twitter.com/${this.twitterName}"
								data-tw
								>🐦</a
							>
							<a
								href="https://github.com/${this.githubName}"
								data-gh
								>🐙</a
							>
							<a href="https://dev.to/${this.devtoName}" data-dev
								>😈</a
							>
						</nav>
					</div>
				</div>
			</article>
		`;
	}
}

customElements.define('dev-lid', DevLid);
