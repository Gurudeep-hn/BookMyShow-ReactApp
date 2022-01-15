import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"grey", padding:"5%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./1.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Pushpa</Card.Title>
                            <Card.Text>
                            Violence erupts between red sandalwood smugglers and the police charged with bringing down their organisation in the Seshachalam forests of South India.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./2.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>The kings man</Card.Title>
                            <Card.Text>
                            One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./3.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>83</Card.Title>
                            <Card.Text>
                            On June 25, 1983, the Lord's Cricket Ground witnessed 14 men beat the twice over World Champions West Indies, putting India back onto the cricket world stage.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./4.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Spider-Man: No Way Home</Card.Title>
                            <Card.Text>
                            With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./5.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Shooter</Card.Title>
                            <Card.Text>
                            Shooter, originally titled as Sukha Kahlon is an Indian Punjabi-language action film directed by Dilsher Singh and Khushpal Singh.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"400px", width:"400px"}}>
                        <Card.Img src="./6.jpeg" alt="Card image" style={{height:"500px", width:"400px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Bangarraju</Card.Title>
                            <Card.Text>
                            Bangarraju is a 2022 Indian Telugu-language supernatural drama film directed by Kalyan Krishna Kurasala who co-wrote the film with Satyanand. Produced by Annapurna Studios and Zee Studios.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
