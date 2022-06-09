import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-headline',
  styleUrl: 'my-headline.css',
  shadow: true,
})
export class MyHeadline {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
