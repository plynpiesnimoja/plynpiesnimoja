import React, { Component, PropTypes } from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import getYouTubeID from 'get-youtube-id'

const CheckYouTubeId = value => {
  let id = getYouTubeID(value)
  console.log("waljuł from field", value)
  console.log("Futejdż ajdik", id)
  return id
}

// https://www.sanity.io/guides/how-to-make-a-custom-input-component

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(CheckYouTubeId(value)))

export default class InputYoutubeId extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   //this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange = (value) => {
    const {onChange} = this.props
    if (Number.isInteger(hours) && Number.isInteger(minutes)) {
      const timeAsString = outgoingValue(hours, minutes)
      onChange(createPatchFrom(timeAsString))
    }
  }

  // static propTypes = {
  //   type: PropTypes.shape({
  //     title: PropTypes.string
  //   }).isRequired,
  //   value: PropTypes.string,
  //   onChange: PropTypes.func.isRequired
  // };

  focus() {
    this._inputElement.focus()
  }

  render() {
    const {type, value, onChange} = this.props
    // const {min, max, step} = type.options.range

    return (
      <FormField label={type.title} description={type.description}>
        <input
          type="text"
          // min={min}
          // max={max}
          // step={step}
          value={value === undefined ? '' : value}
          // onChange={event => {
          //   onChange(createPatchFrom(event.target.value))
          // }}
          onChange={this.handleChange}
          ref={element => this._inputElement = element}
        />
        <div>{this.state.value}</div>
      </FormField>
    )
  }
}