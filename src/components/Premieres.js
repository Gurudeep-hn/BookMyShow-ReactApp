import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background:"rgb(43, 49, 72)", padding:"5%"}}>
        <h2 style={{color:"white"}}>Premieres</h2>
        <Carousel indicators={false} variant="dark">
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./7.jpeg" />
                        <Card.Body>
                        <Card.Title>Chandigarh Kare Aashiqui</Card.Title>
                        <Card.Text>
                        Manu, a bodybuilder from Chandigarh, India, falls in love with Maanvi, a Zumba teacher. All seems well until a revelation causes turmoil in their love story.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./8.jpeg" />
                        <Card.Body>
                        <Card.Title>The Matrix Resurrections</Card.Title>
                        <Card.Text>
                        To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion, is still the only way out of -- or into -- the Matrix.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./9.jpeg" />
                        <Card.Body>
                        <Card.Title>Kombu Vatcha Singamda</Card.Title>
                        <Card.Text>
                        Language. Tamil. Kombu Vatcha Singamda ( transl. The Lion with Horns) is an upcoming Indian Tamil-language action drama film written and directed by S.R. Prabhakaran and produced by Redhan The Cinema People.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item >
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./10.jpeg" />
                        <Card.Body>
                        <Card.Title>The House of the Dead</Card.Title>
                        <Card.Text>
                        The House of the Dead, also known as Curien Mansion in other media, is a horror-themed light gun shooter video game franchise created by Sega in 1996.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./11.jpeg" />
                        <Card.Body>
                        <Card.Title>Venom</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./12.jpeg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Premieres;
