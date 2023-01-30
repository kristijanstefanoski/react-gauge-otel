import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import axios from "axios";

function SimpleCalculation() {
  const handleSubmit = async (
    event: Event & {
      target: { expression: { value: string } };
    }
  ) => {
    event.preventDefault();
    const expression = event?.target?.expression?.value;
    if (!expression?.length) {
      return toast.error("Please enter an expression to evaluate", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const { data } = (await axios.get(
      `http://localhost:9080/api/evaluate/${expression}`
    )) as { data: { result: number } };
    return toast.success(`The result is: ${data.result}`, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    // @ts-ignore
    <Form onSubmit={handleSubmit}>
      <h3>Simple Mathematical Evaluator</h3>
      <Form.Group className="mb-3" controlId="expression">
        <Form.Label>Type a simple mathematical expression</Form.Label>
        <Form.Control type="string" placeholder="ex. (3*7+4)*0.25" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Evaluate Expression
      </Button>
    </Form>
  );
}

export default SimpleCalculation;
