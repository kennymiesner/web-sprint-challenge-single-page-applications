// Import Schema for Form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'name must be at least 2 characters'),
  special: yup
    .string()
    .trim(),
  size: yup
    .string()
    .trim(),
  pepperoni: yup
    .string()
    .trim(),
  sausage: yup
    .string()
    .trim(),
  bacon: yup
    .string()
    .trim(),
  onion: yup
    .string()
    .trim(),
})

export default formSchema