import { Component, Event, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() currentNumber: number;
  @Prop() targetNumber: number;
  @Prop() measureWord: string;
  @Event() valueChanged: number;
  @State() startingNumber: number = 0;

  inputHandler(event) {
    if (this.currentNumber <= this.targetNumber) {
      this.currentNumber = event.target.value;
      this.valueChanged = this.currentNumber;
    } else {
      console.log('number exceeding target number!');
    }
  }

  getValue() {
    const number = (this.currentNumber / this.targetNumber) * 100;
    if (number <= 100) {
      return Math.round(number);
    } else if (number > 100) {
      return 100;
    }
  }

  render() {
    return (
      <div class="wrapper">
        <slot name="my-headline" />
        <p>
          <input class="progressbar__input" type="text" value={this.currentNumber} onChange={this.inputHandler.bind(this)} /> of {this.targetNumber} {this.measureWord}
        </p>
        <div class="participants">
          <span>0</span>
          <span>{this.targetNumber}</span>
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
