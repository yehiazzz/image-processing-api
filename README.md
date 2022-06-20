### Scripts

- Install: `npm install`
- Build: `npm run build`
- Lint: `npm run lint`
- prettier: `npm run prettier`
- Run unit tests: `npm run test`
- Start server: `npm run start`

### Usage

The server will listen on port 3000:

#### Brief instructions

http://localhost:3000/

#### Endpoint to resize images

http://localhost:3000/api/images

Expected query arguments are:

- _filename_: Available filenames are:
  - one
  - two
- _width_: numerical pixel value > 0
- _height_: numerical pixel value > 0

#### Example 1

http://localhost:3000/api/images
Will display a hint and list available image names

#### Example 2

http://localhost:3000/api/images?filename=one
Will display the original one image.

#### Example 3

http://localhost:3000/api/images?filename=one&width=200&height=200
Will scale the one image to 200 by 200 pixels and store the resulting image.
On subsequent calls will serve the resized image instead of resizing the
original again.
