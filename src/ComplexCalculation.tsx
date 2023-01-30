import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { getGeometricSum } from "./services";

function SimpleCalculation() {
  const handleSubmit = async (
    event: Event & {
      target: {
        first: { value: number };
        ratio: { value: number };
        count: { value: number };
      };
    }
  ) => {
    event.preventDefault();
    const { first, ratio, count } = event.target;
    if (
      !first?.value?.toString()?.length ||
      !ratio?.value?.toString()?.length ||
      !count?.value?.toString()?.length
    ) {
      return toast.error("Please fill in all the fields", {
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

    const { data } = await getGeometricSum(
      first.value,
      ratio.value,
      count.value
    );
    return toast.success(`The result of the summation is: ${data.result}`, {
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
      <h3>Mathematical Summator</h3>
      <Form.Group className="mb-3" controlId="first">
        <Form.Label>Enter the first element of the series</Form.Label>
        <Form.Control type="number" placeholder="ex. 1" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ratio">
        <Form.Label>Enter the common ratio of the series</Form.Label>
        <Form.Control type="number" placeholder="ex. 2" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="count">
        <Form.Label>Number of terms to sum</Form.Label>
        <Form.Control type="number" placeholder="ex. 4" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Evaluate Expression
      </Button>
    </Form>
  );
}

export default SimpleCalculation;
