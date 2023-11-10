import { Button,Form,Row,Col, FormGroup, FormLabel, FormControl, FormSelect ,Alert} from "react-bootstrap";
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'
import { useState } from "react";


export default function Formulario() {
    const [busqueda, setBusqueda] = useState({
        categoria:''
    })
    const [alerta, setAlerta] = useState('')
    const {categorias}=useCategorias()
    const{consultarBebidas}=useBebidas()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('todos los campos son obligatorios');
            return
        }
        setAlerta('');
        consultarBebidas(busqueda)
    }
  return (
    <Form  onSubmit={handleSubmit}>
        {alerta && <Alert variant="danger" className="text-center mb-5">{alerta}</Alert>}
        <Row className="contenedor">
        
            <Col  md={6}>
                <FormGroup className="  mb-3">
                    <FormLabel htmlFor="categoria" className="mt-5"></FormLabel>
                    <FormSelect id="categoria" name="categoria" value={busqueda.categoria}
                            onChange={e=> setBusqueda({
                                ...busqueda,
                                [e.target.name]:e.target.value
                            })}>
                        <option  value=""> Selecciona Categoria</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </FormSelect>
                </FormGroup>
                <Button type="submit" variant="danger" className=" text-uppercase w-100 " >Buscar Bebida</Button>
            </Col>
             
        </Row>
       
    </Form>
  )
}
