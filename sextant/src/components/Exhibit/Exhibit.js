import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Exhibit = (props) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Exhibit;
