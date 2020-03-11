/*
 * CircularProgressBar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'


interface CircularProgressBarProps {
  style?: any,
  sqSize: number, //200,
  percentage: number, //25,
  strokeWidth: number, //10
  strokeColor: string,
  strokeBackgroundColor: string,
}

export default class CircularProgressBar extends RX.Component<CircularProgressBarProps> {
  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * this.props.percentage / 100

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        style={this.props.style}
        viewBox={viewBox}>
        <circle
          style={{
            fill: 'none',
            stroke: this.props.strokeBackgroundColor,
          }}
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth - 1}px`}
        />
        {
          this.props.percentage > 0 &&
          <circle
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset - 2,
              fill: 'none',
              stroke: '#fafafa',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
          />
        }

        <circle
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth - 1}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            fill: 'none',
            stroke: this.props.strokeColor,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />
      </svg>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
