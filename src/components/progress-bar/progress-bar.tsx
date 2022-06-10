import { Component, Event, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() currentnumber: string;
  @Prop() goal: string;
  @Event() valueChanged: string;
  @Element() host: HTMLElement;
  @State() progressValue: number;

  inputHandler(event) {
    this.currentnumber = event.target.value;
    this.valueChanged = this.currentnumber;
  }

  getValue() {
    return (parseInt(this.currentnumber) / parseInt(this.goal)) * 100;
  }

  render() {
    return (
      <div class="wrapper">
        <h1>
          <slot name="my-headline" />
        </h1>
        <p>
          <input class="progressbar__input" value={this.currentnumber} type="text" onChange={this.inputHandler.bind(this)} /> of {this.goal} participants
        </p>
        <div class="participants">
          <span>0</span>
          <span>{this.goal}</span>
        </div>
        <div class="progressbar">
          <span class="progressbar__tooltip" style={{ left: `${this.getValue()}%` }}>
            {this.getValue()} %
          </span>
          <div class="progressbar__value" style={{ width: `${this.getValue()}%` }}></div>
        </div>
      </div>
    );
  }
}
