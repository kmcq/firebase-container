# Firebase container

This is just a quick stub of how I'm doing this in another project so that I can
share this and get feedback.

Basic idea is that the FirebaseContainer component won't render its children
until it receives the data that they need and that you have just one reducer
that can get data from firebase. This isn't the correct use-case for all
scenarios, but is a fine default.

Possible extensions:
- Accept a loading component to replace the default `<div>Loading...</div>`
- A way to handle if there's an error in getting the data
- A way to handle if there's no response, i.e. server timeout
