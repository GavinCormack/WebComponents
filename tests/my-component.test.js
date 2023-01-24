import { html, fixture, expect } from '@open-wc/testing';
import '../dist/my-component.js';

describe('My component', () => {
    it('should render a title', async () => {
        const el = await fixture(html`<my-component></my-component>`);
        expect(el.title).to.equal('My component');
    });
});