// Import Schema for Form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'name must be at least 2 characters'),
  size: yup
    .string()
    .trim()
    .oneOf(['Small', 'Medium', 'Large', 'Extra-Large'])
    .required('Please select a pizza size'),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  onion: yup.boolean(),

  special: yup
    .string()
    .trim(),
})

export default formSchema