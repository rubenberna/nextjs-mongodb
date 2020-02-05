import { Jumbotron, Button } from 'react-bootstrap'

const Headline = ({ content }) => (
  <Jumbotron>
    <p>[dynamic headline]</p>
    <h1>{content.Headline}</h1>
    <p>[dynamic paragraph]</p>
    <p>{content.Paragraph1}</p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
)

export default Headline
