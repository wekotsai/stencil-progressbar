import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {
  @Prop() currentnumber: string;
  @Prop() goal: string;
  @Event() valueChanged: EventEmitter<string>;

  onInput(event: Event) {
    this.currentnumber = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.currentnumber);
  }

  render() {
    const percentage = (parseInt(this.currentnumber) / parseInt(this.goal)) * 100;
    return (
      <div class="wrapper">
        <h1>
          <slot name="my-headline" />
        </h1>
        <p>
          <input class="progressbar__input" value={this.currentnumber} type="text" onInput={e => this.onInput.bind(e)} /> of {this.goal} participants
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
