import { Col,Card,Button} from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export default function Bebida({bebida}) {
    const {handleModalClick,handleBebidaId}=useBebidas()
  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img
                variant="top"
                src={bebida.strDrinkThumb}
                alt={`imagen de ${bebida.strDrink}`}
            />
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button className="btn w-100 text-center mt-2 text-uppercase"
                 onClick={()=>{
                        handleModalClick()
                        handleBebidaId(bebida.idDrink)
                    }}>
                    Ver Receta
                </Button>
            </Card.Body>
        </Card>
    
    
    
    
    </Col>
  )
}
