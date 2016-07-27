import React from 'react'
import { connect } from 'react-redux'
import Link from 'react-router/lib/Link'
import FirebaseContainer from 'containers/FirebaseContainer'

export const Subjects = (props) => (
  <FirebaseContainer dataType='subjects'>
      <h1>Subjects</h1>
      <ul>
        {props.subjects.map(subject =>
          <li key={subject}>{subject}</li>
        )}
      </ul>
    </div>
  </FirebaseContainer>
)

const mapStateToProps = (state) => ({
  // Since this won't ever render until the data is received, we can break law
  // of delimiter here.
  subjects: state.data.subjects.data
})

export default connect(mapStateToProps)(Subjects)
