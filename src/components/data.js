export default [
    {
      name: 'Lion',
      image:'../../images/baggy.svg',
      scientificName: 'Panthero leo',
      size: 140,
      diet: ['meat'],
    },
    {
      name: 'Gorilla',
      image:'../../images/baggy.svg',
      scientificName: 'Gorilla beringei',
      size: 205,
      diet: ['plants', 'insects'],
      additional: {
        notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
      }
    },
    {
      name: 'Zebra',
      image:'../../images/baggy.svg',
      scientificName: 'Equus quagga',
      size: 322,
      diet: ['plants'],
      additional: {
        notes: 'There are three different species of zebra.',
        link: 'https://en.wikipedia.org/wiki/Zebra'
      }
    }
  ]