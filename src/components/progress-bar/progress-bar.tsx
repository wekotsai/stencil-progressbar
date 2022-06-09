import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() headline: string;
  @Prop() number: string;
  @Prop() goal: string;

  render() {
    const percentage = (parseInt(this.number) / parseInt(this.goal)) * 100;
    return (
      <div class="wrapper">
        <h1>{this.headline}</h1>
        <p>
          {this.number} of {this.goal} participants
        </p>
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
