// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import person from './documents/person'
import sampleProject from './documents/sampleProject'
import siteSettings from './documents/siteSettings'
import siteSettingsMainPage from './documents/siteSettingsMainPage'
import siteSettingsAboutBandPage from './documents/siteSettingsAboutBandPage'
import siteSettingsAboutProjectPage from './documents/siteSettingsAboutProjectPage'
import gallery from './documents/gallery'

// Object types
import bioPortableText from './objects/bioPortableText'
import attachment from './objects/attachment'
import figure from './objects/figure'
import youtube from './objects/youtube'
import projectMember from './objects/projectMember'
import persona from './objects/persona'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import socialMediaLinks from './objects/socialMediaLinks'
import mediaThumb from './objects/mediaThumb'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'strona',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    attachment,
    figure,
    mediaThumb,
    youtube,
    projectMember,
    persona,
    projectPortableText,
    simplePortableText,
    socialMediaLinks,
    
    // The following are document types which will appear
    // in the studio.
    category,
    person,
    sampleProject,
    siteSettings,
    siteSettingsMainPage,
    siteSettingsAboutBandPage,
    siteSettingsAboutProjectPage,
    gallery
  ])
})
