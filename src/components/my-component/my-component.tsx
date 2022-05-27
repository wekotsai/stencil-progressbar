import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() headline: string;
  @Prop() number: string;
  @Prop() of: string;
  @Prop() goal: string;

  getText(): string {
    return format(this.number, this.of, this.goal);
  }

  render() {
    const percentage = (parseInt(this.number) / parseInt(this.goal)) * 100;
    return (
      <div class="wrapper">
        <h1>{this.headline}</h1>
        <p>{this.getText()} participants</p>
        <div class="participants">
          <span>0</span>
          <span>{this.goal}</span>
        </div>
        <div class="progressbar">
          <span class="progressbar__tooltip">{percentage} %</span>
          <div class="progressbar__value"></div>
        </div>
      </div>
    );
  }
}
