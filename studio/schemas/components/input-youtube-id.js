import React, { Component, useState } from 'react'
// import { withDocument } from 'part:@sanity/form-builder'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import getYouTubeID from 'get-youtube-id'

import './input-youtube-id.css'
// import styles from './input-youtube-id.module.scss'

const styles = {
  input: { 
    display: `flex`,
    width: `calc(100% - 1.25rem)`,
    height: `2rem`,
    padding: `0 0.5rem`
  },
  preview: {
    container: 
    { 
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      width: `100%`,
      minHeight: `10rem`,
      backgroundColor: `#eaeaea`,
      marginTop: `1rem`
    },
    emptyState: {
      padding: `1rem`
    }
  },
  extractor: {
    input: {
      display: `flex`,
      width: `calc(100% - 1.25rem)`,
      height: `2rem`,
      padding: `0 0.5rem`,
      backgroundColor: `#a8a8a8`,
      border: 0
    },
    output: {
      width: `calc(100% - 1.25rem)`,
      padding: `0.5rem`,
      height: `2rem`,
      backgroundColor: `#fff`
    }
  }
}

const ExtractYouTubeId = value => {
  const [input, setInput] = useState();

  return (
    <div className="CheckYoutubeid">
      <ExtractYouTubeIdInput
        onChange={(event) => setInput(event.target.value)}
        placeholder='Wpisz adres url filmu z Youtube'
      />
      {input && <ExtractYouTubeIdOutput source={input} />}
    </div>
  );
}

const ExtractYouTubeIdInput = ({ value, onChange, ...others }) => {
  return (
    <div>
      <input style={styles.extractor.input} onChange={onChange} value={value} {...others} />
    </div>
  );
};

const ExtractYouTubeIdOutput = ({ source }) => {
  const id = getYouTubeID(source, { fuzzy: true })
  return (
    <div>
      <div style={styles.extractor.output}>{id ? id : 'Oj! Coś jest nie tak...'}</div>
    </div>
  );
};



export const YouTubePreview = ({ value }) => {
  if (value === '') {
    return (
      <div style={styles.preview.container}>
        <div style={styles.preview.emptyState}>
          <p>Wpisz ID filmu, np. "kLsER_zHiS4".</p>
          <p>Jeżeli film przykładowo ma adres <em>https://www.youtube.com/watch?time_continue=1&v=<strong>kLsER_zHiS4</strong>&feature=emb_title</em>,
          to ID filmu są te pogrubione kluczowe 11 znaków.</p>
          <p>PS. Jeżeli ID będzie poprawny, to automatycznie odtworzy się podgląd filmu.</p>
          <ExtractYouTubeId />
        </div>
      </div>
    )
  } else {
    return(
      <div style={styles.preview.container}>
        <iframe
          width="256" 
          height="144"
          src={`https://www.youtube.com/embed/${value}?autoplay=1`} 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    )
  }
}



// https://christianlobaugh.com/blog/2020/01/adding-embedded-video-to-our-new-gatsby-blog/
// https://www.sanity.io/guides/how-to-make-a-custom-input-component

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(value))

class InputYoutubeId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      <>
        <FormField label={type.title} description={type.description}>
          <input
            className="InputYoutubeId"
            type="text"
            style={styles.input}
            value={value === undefined ? '' : value}
            onChange={event => {
              onChange(createPatchFrom(event.target.value))
              this.setState({ value: event.target.value })
            }}
            ref={element => this._inputElement = element}
          />
        </FormField>
        <YouTubePreview value={this.state.value} />
      </>
    )
  }
}

export default InputYoutubeId

