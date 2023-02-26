import React from 'react'

import Meta from '../meta'

export default function IndexPage () {
  return (
    <>
      <p>
        I&rsquo;m a software developer from Minneapolis. Currently, I work on eventing and engineering platform systems at <a href='https://www.chrobinson.com'>C.H. Robinson</a>.
      </p>
      <p>
        You can find me on <a href='https://github.com/dstelljes'>GitHub</a> and <a href='https://clontarf.icu/@dan' rel='me'>Mastodon</a>.
      </p>
    </>
  )
}

export function Head () {
  return (
    <Meta>
      <meta name='description' content='Dan Stelljes is a software developer from Minneapolis.' />
    </Meta>
  )
}
